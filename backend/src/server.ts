import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';

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
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
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

// Body metrics routes
app.get('/api/body-metrics', async (req, res, next) => {
  try {
    const metrics = await prisma.history_body_metrics.findMany({
      include: {
        users: true,
      },
    });
    res.json(metrics);
  } catch (error) {
    next(error);
  }
});

// Workout plans routes
app.get('/api/workout-plans', async (req, res, next) => {
  try {
    const plans = await prisma.workout_plans.findMany({
      include: {
        exercises: true,
        plan_exercise_templates: true,
      },
    });
    res.json(plans);
  } catch (error) {
    next(error);
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
