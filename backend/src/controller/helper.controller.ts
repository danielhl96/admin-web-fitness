import { Request, Response } from 'express';
import {
  fetchMeals,
  fetchExercises,
  generatePassword,
} from '../service/helper.service';
import { prisma, prismaUser } from '../prisma/Prisma';

export const getMealsController = async (req: Request, res: Response) => {
  try {
    const meals = await fetchMeals();
    res.status(200).json({ message: 'Meals fetched successfully', meals });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meals' });
  }
};

export const getExercisesController = async (req: Request, res: Response) => {
  try {
    const exercises = await fetchExercises();
    res
      .status(200)
      .json({ message: 'Exercises fetched successfully', exercises });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exercises' });
  }
};

export const getGeneratedPasswordController = (req: Request, res: Response) => {
  try {
    const password = generatePassword();
    res
      .status(200)
      .json({ message: 'Password generated successfully', password });
  } catch (error) {
    res.status(500).json({ message: 'Error generating password' });
  }
};

export const healthCheckController = async (req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    await prismaUser.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'connected',
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      database: 'disconnected',
    });
  }
};
