import express from 'express';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const verifyAdmin = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log('Verifying admin authentication...');
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

export default verifyAdmin;
