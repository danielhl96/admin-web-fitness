import { prisma, prismaUser } from '../prisma/Prisma';
import { validateEmail } from '../helper/emailvalid';
import { validatePassword } from '../helper/passwordvalid';
import argon2 from 'argon2';

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
  validateEmail(email);
  validatePassword(password);
  return await prismaUser.users.create({
    data: {
      email: email,
      password: await hashPassword(password),
    },
  });
};

export const deleteUser = async (id: number) => {
  return await prismaUser.users.delete({
    where: {
      id,
    },
  });
};

export const updateUserMail = async (id: number, email: string) => {
  validateEmail(email);

  const existingMail = await prismaUser.users.findFirst({
    where: {
      email,
      id: { not: id },
    },
  });
  if (existingMail) {
    throw new Error('Email already in use');
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
  validatePassword(password);
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
  return await prismaUser.users.findUnique({
    where: {
      id,
    },
  });
};

export const setUserLockout = async (id: number, isLocked: boolean) => {
  return await prismaUser.users.update({
    where: {
      id,
    },
    data: {
      locked: isLocked,
    },
  });
};
