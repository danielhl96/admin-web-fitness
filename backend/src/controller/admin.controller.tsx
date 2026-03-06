import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import {
  fetchAdmins,
  registerAdmin,
  deleteAdmin,
  loginAdmin,
  refreshAdminToken,
} from '../service/admin.service';
import { COOKIE_MAX_AGE } from '../constants';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

export const fetchAdminsController = async (req: Request, res: Response) => {
  try {
    const admins = await fetchAdmins();
    res.status(200).json({ message: 'Admins fetched successfully', admins });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admins' });
  }
};

export const registerAdminController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const newAdmin = await registerAdmin(email, password);
    res
      .status(201)
      .json({ message: 'Admin registered successfully', admin: newAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Error registering admin' });
  }
};

export const deleteAdminController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const adminId = Number(id);

  if (isNaN(adminId)) {
    return res.status(400).json({ message: 'Invalid admin ID' });
  }

  try {
    await deleteAdmin(adminId);
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting admin' });
  }
};

export const loginAdminController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const token = await loginAdmin(email, password);

    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure in production
      sameSite: 'strict',
      maxAge: COOKIE_MAX_AGE,
    });
    res.status(200).json({ message: 'Admin logged in successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in admin' });
  }
};
export const logoutAdminController = async (req: Request, res: Response) => {
  try {
    res.clearCookie('admin_token');
    res.status(200).json({ message: 'Admin logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out admin' });
  }
};

export const refreshAdminTokenController = async (
  req: Request,
  res: Response
) => {
  const token = req.cookies.admin_token;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const decoded = jwt.verify(token, JWT_SECRET, {
    ignoreExpiration: true,
    issuer: 'admin-web-fitness',
    audience: 'admin-web-fitness',
  }) as jwt.JwtPayload & { adminId: number };
  if (!decoded || !decoded.adminId || typeof decoded.adminId !== 'number') {
    return res.status(400).json({ message: 'Invalid token' });
  }

  const adminIdNum = decoded.adminId;
  try {
    const newToken = await refreshAdminToken(adminIdNum);
    res.cookie('admin_token', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure in production
      sameSite: 'strict',
      maxAge: COOKIE_MAX_AGE,
    });
    res
      .status(200)
      .json({ message: 'Admin token refreshed successfully', token: newToken });
  } catch (error) {
    res.status(500).json({ message: 'Error refreshing admin token' });
  }
};
