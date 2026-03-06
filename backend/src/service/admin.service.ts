import { prisma } from '../prisma/Prisma';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export const fetchAdmins = async () => {
  return await prisma.admins.findMany();
};

const hashPassword = async (password: string): Promise<string> => {
  return await argon2.hash(password, {
    timeCost: 3,
    memoryCost: 256,
    parallelism: 4,
    hashLength: 32,
    type: argon2.argon2id,
  });
};

export const registerAdmin = async (email: string, password: string) => {
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailIsValid) {
    throw new Error('Invalid email format');
  }

  const passwordIsValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*'])[A-Za-z\d!@#$%^&*']{8,}$/.test(
      password
    );
  if (!passwordIsValid) {
    throw new Error(
      "Password must be at least 8 characters long and contain at least one letter, one number, and one special character (!@#$%^&*')"
    );
  }

  return await prisma.admins.create({
    data: {
      email: email,
      password: await hashPassword(password),
    },
  });
};
export const deleteAdmin = async (id: number) => {
  return await prisma.admins.delete({
    where: {
      id,
    },
  });
};

export const loginAdmin = async (email: string, password: string) => {
  const admin = await prisma.admins.findUnique({
    where: {
      email,
    },
  });

  if (!admin) {
    throw new Error('Admin not found');
  }

  const isPasswordValid = await argon2.verify(admin.password, password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
    jwtid: `${admin.id}-${Date.now()}`,
    issuer: 'admin-web-fitness',
    audience: 'admin',
    subject: admin.id.toString(),
    notBefore: '0s',
  });

  return token;
};

export const refreshAdminToken = async (adminId: number) => {
  const admin = await prisma.admins.findUnique({
    where: {
      id: adminId,
    },
  });

  if (!admin) {
    throw new Error('Admin not found');
  }

  const token = jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
    jwtid: `${admin.id}-${Date.now()}`,
    issuer: 'admin-web-fitness',
    audience: 'admin',
    subject: adminId.toString(),
    notBefore: '0s',
  });

  return token;
};
