import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import argon2 from 'argon2';
import cookieParser from 'cookie-parser';
import { prisma, prismaUser } from './prisma/Prisma';
import adminRoutes from './routes/admin.routes';
import userRoutes from './routes/user.routes';
import helperRoutes from './routes/helper.routes';

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// Logging middleware
app.use(morgan('combined'));

// Cookie parser middleware
app.use(cookieParser());

// CORS middleware
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  await prisma.$disconnect();
  await prismaUser.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  await prisma.$disconnect();
  await prismaUser.$disconnect();
  process.exit(0);
});

app.use('/api', helperRoutes);
app.use('/api', userRoutes);
app.use('/', adminRoutes);

const firstStartup = async (): Promise<void> => {
  try {
    const admin = await prisma.admins.findFirst({
      where: { masterid: true },
    });
    console.log('Admin user check completed: ', admin);

    if (!admin) {
      const hashedPassword = await argon2.hash(ADMIN_PASSWORD, {
        timeCost: 3,
        memoryCost: 256,
        parallelism: 4,
        hashLength: 32,
        type: argon2.argon2id,
      });
      await prisma.admins.create({
        data: {
          email: ADMIN_EMAIL,
          password: hashedPassword,
          masterid: true,
        },
      });
    }
  } catch (error) {
    console.error('Error during first startup:', error);
  }
};

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  prisma
    .$connect()
    .then(() => {
      console.log('Admin Prisma connected');
    })
    .catch((error) => {
      console.error('Admin Prisma connection failed:', error);
    });
  prismaUser
    .$connect()
    .then(() => {
      console.log('User Prisma connected');
    })
    .catch((error) => {
      console.error('User Prisma connection failed:', error);
    });
  await firstStartup();
});
