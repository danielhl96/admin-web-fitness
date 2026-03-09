import express from 'express';
import { AppError } from '../AppError';
export const validateEmail = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email);
  if (!emailIsValid) {
    throw new AppError(400, 'Invalid email format');
  }
  next();
};
