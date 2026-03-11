import app from './app';
import { prisma, prismaUser } from './prisma/Prisma';
import { firstStartup } from './init';

const PORT = process.env.PORT || 3000;

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  await prisma.$disconnect();
  await prismaUser.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  await prisma.$disconnect();
  await prismaUser.$disconnect();
  process.exit(0);
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  prisma
    .$connect()
    .then(() => {
      console.log('Admin Prisma connected');
    })
    .catch((error) => {
      console.error('Admin Prisma connection failed:', error);
    });
  prismaUser
    .$connect()
    .then(() => {
      console.log('User Prisma connected');
    })
    .catch((error) => {
      console.error('User Prisma connection failed:', error);
    });
  await firstStartup();
});
