import express from 'express';
import {
  getExercisesController,
  getMealsController,
  getGeneratedPasswordController,
  healthCheckController,
} from '../controller/helper.controller';
import middleware from '../middleware/verifyAdmin';
const router = express.Router();

router.get('/meals', middleware, getMealsController);
router.get('/exercises', middleware, getExercisesController);
router.get('/generate-password', middleware, getGeneratedPasswordController);
router.get('/health', healthCheckController);

export default router;
