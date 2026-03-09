import { PASSWORD_MIN_LENGTH } from '../constants';
import express from 'express';
import { AppError } from '../AppError';
export const validatePassword = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const passwordIsValid = new RegExp(
    `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*'])[A-Za-z\\d!@#$%^&*']{${PASSWORD_MIN_LENGTH},}$`
  ).test(req.body.password);
  if (!passwordIsValid) {
    throw new AppError(
      400,
      `Password must be at least ${PASSWORD_MIN_LENGTH} characters long and contain at least one letter, one number, and one special character (!@#$%^&*')`
    );
  }
  next();
};
