import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

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

// CORS middleware
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://your-production-domain.com',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Connect to database
async function main() {
  try {
    await prisma.$connect();
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

main();

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});

app.get('/api/users', async (req, res, next) => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
});

// Exercises routes
app.get('/api/exercises', async (req, res, next) => {
  try {
    const exercises = await prisma.exercises.findMany({
      include: {
        users: true,
        workout_plans: true,
      },
    });
    res.json(exercises);
  } catch (error) {
    next(error);
  }
});

// Meals routes
app.get('/api/meals', async (req, res, next) => {
  try {
    const meals = await prisma.meals.findMany({
      include: {
        users: true,
      },
    });
    res.json(meals);
  } catch (error) {
    next(error);
  }
});

app.get('/api/profile/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const userProfile = await prisma.users.findUnique({
      where: { id: userId },
    });
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.put('/api/email/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  console.log('Received email update request for user ID:', userId);
  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: { email },
    });

    res.status(200).json('Email updated successfully');
  } catch (error) {
    console.error('Email update failed:', error);
    res.status(500).json({ error: 'Failed to update email' });
  }
});

app.put('/api/password/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  const { password } = req.body;

  if (!password || typeof password !== 'string') {
    return res.status(400).json({ error: 'Password is required' });
  }

  try {
    // Hash the password with Argon2 before storing
    const hashed = await argon2.hash(password, {
      timeCost: 3,
      memoryCost: 256,
      parallelism: 4,
      hashLength: 32,
      saltLength: 16,
      type: argon2.argon2id,
    });

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: { password: hashed },
    });

    res.status(200).json('Password updated successfully');
  } catch (error) {
    console.error('Password update failed:', error);
    res.status(500).json({ error: 'Failed to update password' });
  }
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  }
);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
