import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';

export const fetchUsers = async () => {
  return await new PrismaClient().users.findMany();
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
  return await new PrismaClient().users.create({
    data: {
      email: email,
      password: await hashPassword(password),
    },
  });
};

export const deleteUser = async (id: number) => {
  return await new PrismaClient().users.delete({
    where: {
      id,
    },
  });
};

export const updateUserMail = async (id: number, email: string) => {
  return await new PrismaClient().users.update({
    where: {
      id,
    },
    data: {
      email: email,
    },
  });
};

export const updateUserPassword = async (id: number, password: string) => {
  return await new PrismaClient().users.update({
    where: {
      id,
    },
    data: {
      password: await hashPassword(password),
    },
  });
};

export const getUserById = async (id: number) => {
  return await new PrismaClient().users.findUnique({
    where: {
      id,
    },
  });
};

export const setUserLockout = async (id: number, isLocked: boolean) => {
  return await new PrismaClient().users.update({
    where: {
      id,
    },
    data: {
      locked: isLocked,
    },
  });
};
