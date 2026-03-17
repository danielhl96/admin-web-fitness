import { Request, Response, NextFunction } from 'express';
import { AppError } from '../AppError';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err); // For debugging

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  // For any other error, send a generic 500
  return res.status(500).json({
    message: 'Internal Server Error',
  });
};
