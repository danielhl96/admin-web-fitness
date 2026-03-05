import express from 'express';
import {
  createUserController,
  deleteUserController,
  updateUserMailController,
  updateUserPasswordController,
  setUserLockoutController,
  fetchUsersController,
} from '../controller/user.controller';
import middleware from '../middleware/verifyAdmin';

const router = express.Router();

router.post('/users/register', middleware, createUserController);
router.delete('/users/:id/delete', middleware, deleteUserController);
router.put('/users/:id/email', middleware, updateUserMailController);
router.put('/users/:id/password', middleware, updateUserPasswordController);
router.put('/users/:id/user_lock', middleware, setUserLockoutController);
router.get('/users', middleware, fetchUsersController);

export default router;
