import { Request, Response } from 'express';
import { fetchMeals, fetchExercises } from '../service/helper.service';

export const getMealsController = async (req: Request, res: Response) => {
  try {
    const meals = await fetchMeals();
    res.status(200).json({ meals });
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).json({ message: 'Error fetching meals' });
  }
};

export const getExercisesController = async (req: Request, res: Response) => {
  try {
    const exercises = await fetchExercises();
    res.status(200).json({ exercises });
  } catch (error) {
    console.error('Error fetching exercises:', error);
    res.status(500).json({ message: 'Error fetching exercises' });
  }
};
