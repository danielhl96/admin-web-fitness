import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import adminRoutes from './routes/admin.routes';
import userRoutes from './routes/user.routes';
import helperRoutes from './routes/helper.routes';

import { errorMiddleware } from './middleware/ErrorMiddleware';
import {
  RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX_REQUESTS,
  BODY_LIMIT,
} from './constants';

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: RATE_LIMIT_WINDOW_MS,
  max: RATE_LIMIT_MAX_REQUESTS,
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
app.use(express.json({ limit: BODY_LIMIT }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', helperRoutes);
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use(errorMiddleware);

export default app;
