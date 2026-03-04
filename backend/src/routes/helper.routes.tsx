import express from 'express';
import {
  getExercisesController,
  getMealsController,
} from '../controller/helper.controller';
import middleware from '../middleware/verifyAdmin';
const router = express.Router();

router.get('/users/meals', middleware, getMealsController);
router.get('/users/exercises', middleware, getExercisesController);

export default router;
