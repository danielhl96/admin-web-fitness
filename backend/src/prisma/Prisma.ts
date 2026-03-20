import 'dotenv/config';
import { PrismaClient } from '../../prisma-client-admin';
import { PrismaClient as PrismaUserClient } from '../../prisma-client-user';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// User DB
const userPool = new Pool({
  connectionString: process.env.USER_DATABASE_URL,
});
const userAdapter = new PrismaPg(userPool);

export const prismaUser = new PrismaUserClient({
  adapter: userAdapter,
  log: ['query'],
});

// Admin DB
const adminPool = new Pool({
  connectionString: process.env.ADMIN_DATABASE_URL,
});
const adminAdapter = new PrismaPg(adminPool);

export const prisma = new PrismaClient({
  adapter: adminAdapter,
  log: ['query'],
});
