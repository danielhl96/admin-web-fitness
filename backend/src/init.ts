import argon2 from 'argon2';
import { prisma } from './prisma/Prisma';
import {
  ARGON2_TIME_COST,
  ARGON2_HASH_LENGTH,
  ARGON2_MEMORY_COST,
  ARGON2_PARALLELISM,
} from './constants';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

export const firstStartup = async (): Promise<void> => {
  try {
    const admin = await prisma.admins.findFirst({
      where: { masterid: true },
    });

    if (!admin) {
      const hashedPassword = await argon2.hash(ADMIN_PASSWORD, {
        timeCost: ARGON2_TIME_COST,
        memoryCost: ARGON2_MEMORY_COST,
        parallelism: ARGON2_PARALLELISM,
        hashLength: ARGON2_HASH_LENGTH,
        type: argon2.argon2id,
      });
      await prisma.admins.create({
        data: {
          email: ADMIN_EMAIL,
          password: hashedPassword,
          masterid: true,
        },
      });
    }
  } catch (error) {
    console.error('Error during first startup:', error);
  }
};
