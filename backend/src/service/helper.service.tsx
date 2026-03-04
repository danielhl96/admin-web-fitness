import { PrismaClient } from '@prisma/client';

export const fetchMeals = async () => {
  return await new PrismaClient().meals.findMany();
};

export const fetchExercises = async () => {
  return await new PrismaClient().exercises.findMany();
};
