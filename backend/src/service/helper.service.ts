import { PrismaClient } from '@prisma/client';
import generate from 'generate-password';

export const fetchMeals = async () => {
  return await new PrismaClient().meals.findMany();
};

export const fetchExercises = async () => {
  return await new PrismaClient().exercises.findMany();
};

export const generatePassword = () => {
  return generate.generate({
    length: 8,
    numbers: true,
    symbols: '!@#$%^&*',
    uppercase: true,
    lowercase: true,
    strict: true,
  });
};
