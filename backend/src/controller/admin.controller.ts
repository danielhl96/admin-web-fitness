import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import {
  fetchAdmins,
  registerAdmin,
  deleteAdmin,
  loginAdmin,
  refreshAdminToken,
} from '../service/admin.service';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

export const fetchAdminsController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const admins = await fetchAdmins();
    res.status(200).json({ message: 'Admins fetched successfully', admins });
  } catch (error) {
    next(error);
  }
};

export const registerAdminController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { email, password } = req.body;

  try {
    const admin = await registerAdmin(email, password);
    res
      .status(201)
      .json({ message: 'Admin registered successfully', adminId: admin.id });
  } catch (error) {
    next(error);
  }
};

export const deleteAdminController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { id } = req.params;
  const adminId = Number(id);

  try {
    await deleteAdmin(adminId);
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const loginAdminController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { email, password } = req.body;

  try {
    const token = await loginAdmin(email, password);

    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 20 * 60 * 1000, // 20 minutes
    });
    res.status(200).json({ message: 'Admin logged in successfully' });
  } catch (error) {
    next(error);
  }
};
export const logoutAdminController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    res.clearCookie('admin_token');
    res.status(200).json({ message: 'Admin logged out successfully' });
  } catch (error) {
    next(error);
  }
};

export const refreshAdminTokenController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const token = req.cookies.admin_token;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const decoded = jwt.verify(token, JWT_SECRET, {
    ignoreExpiration: true,
    issuer: 'admin-web-fitness',
    audience: 'admin',
  }) as jwt.JwtPayload & { adminId: number };
  if (!decoded || !decoded.adminId || typeof decoded.adminId !== 'number') {
    return res.status(400).json({ message: 'Invalid token' });
  }

  const adminIdNum = decoded.adminId;
  try {
    const newToken = await refreshAdminToken(adminIdNum);
    res.cookie('admin_token', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    });
    res
      .status(200)
      .json({ message: 'Admin token refreshed successfully', token: newToken });
  } catch (error) {
    next(error);
  }
};
