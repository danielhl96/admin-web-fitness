import { PrismaClient } from '../../prisma-client-admin';
import { PrismaClient as PrismaUserClient } from '@prisma/client';

// Create a singleton instance of PrismaClient for admin operations
// and a separate instance for user operations to avoid conflicts
// This approach ensures that we have a single PrismaClient instance for each context (admin and user)
// We use globalThis to store the instances so that they persist across module reloads in development
// This is a common pattern to prevent multiple instances of PrismaClient in development

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const globalForPrismaUser = globalThis as unknown as {
  prismaUser: PrismaUserClient | undefined;
};

export const prismaUser =
  globalForPrismaUser.prismaUser ??
  new PrismaUserClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrismaUser.prismaUser = prismaUser;
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
