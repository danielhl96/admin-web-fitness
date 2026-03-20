import argon2 from 'argon2';
import { prisma, prismaUser } from './prisma/Prisma';
import {
  ARGON2_TIME_COST,
  ARGON2_HASH_LENGTH,
  ARGON2_MEMORY_COST,
  ARGON2_PARALLELISM,
} from './constants';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

export const firstStartup = async (): Promise<void> => {
  console.log('Running first startup checks...');
  try {
    const admin = await prisma.admins.findFirst({
      where: { masterid: true },
    });

    const user = await prismaUser.users.findFirst({
      where: { email: 'gast@gast.de' },
    });
    if (admin) {
      console.log('Master admin already exists:', admin.email);
    } else {
      console.log('No master admin found, creating one...');
    }
    if (user) {
      console.log('Guest user already exists:', user.email);
    } else {
      console.log('No guest user found, creating one...');
    }

    if (!user) {
      const hashedPassword = await argon2.hash('Gast@1234', {
        timeCost: ARGON2_TIME_COST,
        memoryCost: ARGON2_MEMORY_COST,
        parallelism: ARGON2_PARALLELISM,
        hashLength: ARGON2_HASH_LENGTH,
        type: argon2.argon2id,
      });
      await prismaUser.users.create({
        data: {
          email: 'gast@gast.de',
          password: hashedPassword,
        },
      });
      console.log('Guest user created successfully');
    }

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
      console.log('Master admin created successfully');
    }
  } catch (error) {
    console.error('Error during first startup:', error);
  }
};
