import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import generate from 'generate-password';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { adminPrisma } from './prisma/adminPrisma';

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
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

// Cookie parser middleware
app.use(cookieParser());

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

// Middleware to verify admin JWT
const verifyAdmin = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.cookies.admin_token;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      adminId: number;
      email: string;
    };
    (req as any).admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

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

app.get('/api/createPassword', async (req, res, next) => {
  console.log('Received request to generate password');
  try {
    const password = generate.generate({
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
    });
    res.json({ password });
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

app.post('/api/user', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const hashedPassword = await argon2.hash(password, {
      timeCost: 3,
      memoryCost: 256,
      parallelism: 4,
      hashLength: 32,
      saltLength: 16,
      type: argon2.argon2id,
    });

    const newUser = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('User creation failed:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.put('/api/user_lock/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  console.log('Received lock/unlock request for user ID:', userId);
  const { locked } = req.body;

  if (typeof locked !== 'boolean') {
    return res.status(400).json({ error: 'Locked status must be a boolean' });
  }

  try {
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: { locked },
    });

    res.status(200).json('User lock status updated successfully');
  } catch (error) {
    console.error('User lock status update failed:', error);
    res.status(500).json({ error: 'Failed to update user lock status' });
  }
});

app.delete('/api/user/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  console.log('Received delete request for user ID:', userId);

  try {
    await prisma.exercises.deleteMany({ where: { user_id: userId } });
  } catch (error) {
    console.error('Exercises deletion failed:', error);
  }

  try {
    const planIds = await prisma.workout_plans
      .findMany({ where: { user_id: userId }, select: { id: true } })
      .then((plans) => plans.map((plan) => plan.id));

    if (planIds.length > 0) {
      await prisma.plan_exercise_templates.deleteMany({
        where: { workout_plan_id: { in: planIds } },
      });
    }
  } catch (error) {
    console.error('Plan exercise templates deletion failed:', error);
  }

  try {
    await prisma.workout_plans.deleteMany({ where: { user_id: userId } });
  } catch (error) {
    console.error('Workout plans deletion failed:', error);
  }

  try {
    await prisma.history_body_metrics.deleteMany({
      where: { user_id: userId },
    });
  } catch (error) {
    console.error('History body metrics deletion failed:', error);
  }

  try {
    await prisma.meals.deleteMany({ where: { user_id: userId } });
  } catch (error) {
    console.error('Meals deletion failed:', error);
  }

  try {
    await prisma.users.delete({ where: { id: userId } });
    res.status(200).json('User deleted successfully');
  } catch (error) {
    console.error('User deletion failed:', error);
    res.status(500).json({ error: 'Failed to delete user' });
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
  console.log('Received password update request for user ID:', userId);
  console.log('Request body:', req.body);
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

app.post('/admin/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const hashedPassword = await argon2.hash(password, {
      timeCost: 3,
      memoryCost: 256,
      parallelism: 4,
      hashLength: 32,
      saltLength: 16,
      type: argon2.argon2id,
    });

    const newAdmin = await adminPrisma.admins.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Admin registration failed:', error);
    res.status(500).json({ error: 'Failed to register admin' });
  }
});

app.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const admin = await adminPrisma.admins.findUnique({
      where: { email },
    });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const validPassword = await argon2.verify(admin.password, password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { adminId: admin.id, email: admin.email },
      JWT_SECRET,
      {
        expiresIn: '20m',
      }
    );

    // Set secure HTTP-only cookie
    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure in production
      sameSite: 'strict',
      maxAge: 20 * 60 * 1000, // 20 minutes
    });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Admin login failed:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

app.post('/admin/logout', (req, res) => {
  res.clearCookie('admin_token');
  res.status(200).json({ message: 'Logout successful' });
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

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  adminPrisma
    .$connect()
    .then(() => {
      console.log('Admin Prisma connected');
    })
    .catch((error) => {
      console.error('Admin Prisma connection failed:', error);
    });
  const admin = await adminPrisma.admins.findFirst();
  console.log('Admin user check completed: ');

  if (!admin) {
    const defaultAdminPassword = 'admin123';
    const hashedPassword = await argon2.hash(defaultAdminPassword, {
      timeCost: 3,
      memoryCost: 256,
      parallelism: 4,
      hashLength: 32,
      saltLength: 16,
      type: argon2.argon2id,
    });
    await adminPrisma.admins.create({
      data: {
        email: 'masteradmin@admin.de',
        password: hashedPassword,
      },
    });
  }
});
