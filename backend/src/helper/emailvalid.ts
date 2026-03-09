import express from 'express';
export const validateEmail = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email);
  if (!emailIsValid) {
    throw new Error('Invalid email format');
  }
  next();
};
