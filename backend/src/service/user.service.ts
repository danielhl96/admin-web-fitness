import { prisma, prismaUser } from '../prisma/Prisma';
import argon2 from 'argon2';
import { AppError } from '../AppError';

export const fetchUsers = async () => {
  return await prismaUser.users.findMany();
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

export const createUser = async (email: string, password: string) => {
  const existingUser = await prismaUser.users.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new AppError(400, 'Email already in use');
  }
  return await prismaUser.users.create({
    data: {
      email: email,
      password: await hashPassword(password),
    },
  });
};

export const deleteUser = async (id: number) => {
  const existingUser = await prismaUser.users.findUnique({
    where: {
      id,
    },
  });

  if (!existingUser) {
    throw new AppError(404, 'User not found');
  }
  return await prismaUser.users.delete({
    where: {
      id,
    },
  });
};

export const updateUserMail = async (id: number, email: string) => {
  const existingMail = await prismaUser.users.findFirst({
    where: {
      email,
      id: { not: id },
    },
  });
  if (existingMail) {
    throw new AppError(400, 'Email already in use');
  }

  return await prismaUser.users.update({
    where: {
      id,
    },
    data: {
      email: email,
    },
  });
};

export const updateUserPassword = async (id: number, password: string) => {
  const existingUser = await prismaUser.users.findUnique({
    where: {
      id,
    },
  });

  if (!existingUser) {
    throw new AppError(404, 'User not found');
  }
  return await prismaUser.users.update({
    where: {
      id,
    },
    data: {
      password: await hashPassword(password),
    },
  });
};

export const getUserById = async (id: number) => {
  const existingUser = await prismaUser.users.findUnique({
    where: {
      id,
    },
  });

  if (!existingUser) {
    throw new AppError(404, 'User not found');
  }

  return existingUser;
};

export const setUserLockout = async (id: number, isLocked: boolean) => {
  const existingUser = await prismaUser.users.findUnique({
    where: {
      id,
    },
  });

  if (!existingUser) {
    throw new AppError(404, 'User not found');
  }

  return await prismaUser.users.update({
    where: {
      id,
    },
    data: {
      locked: isLocked,
    },
  });
};
