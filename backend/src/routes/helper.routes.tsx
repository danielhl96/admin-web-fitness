import express from 'express';
import {
  getExercisesController,
  getMealsController,
} from '../controller/helper.controller';

const router = express.Router();

router.get('/meals', getMealsController);
router.get('/exercises', getExercisesController);

export default router;
