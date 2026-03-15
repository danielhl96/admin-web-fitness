import { AppError } from '../AppError';
import express from 'express';

const isNumber = (id: string): boolean => {
  for (let i = 0; i < id.length; i++) {
    if (id[i] < '0' || id[i] > '9') {
      return false;
    }
  }
  return true;
};

export const validId = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { id } = req.params;
  if (!isNumber(id)) {
    throw new AppError(400, 'Invalid ID format');
  }
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId) || parsedId <= 0) {
    throw new AppError(400, 'Invalid ID format');
  }
  next();
};
