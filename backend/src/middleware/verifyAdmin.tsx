import express from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

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
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload & {
      adminId: number;
    };
    if (!decoded.adminId || typeof decoded.adminId !== 'number') {
      return res.status(401).json({ error: 'Invalid token payload' });
    }
    (req as any).admin = { adminId: decoded.adminId };
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default verifyAdmin;
