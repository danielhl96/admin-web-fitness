import { AppError } from '../AppError';
import express from 'express';
export const validId = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId) || parsedId <= 0) {
    throw new AppError(400, 'Invalid ID format');
  }
  return parsedId;
};
