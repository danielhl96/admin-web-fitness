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
import { validateEmail } from '../helper/emailvalid';
import { validatePassword } from '../helper/passwordvalid';
import { validId } from '../helper/validId';
const router = express.Router();

router.post(
  '/users/register',
  middleware,
  validateEmail,
  validatePassword,
  createUserController
);
router.delete('/users/:id/delete', middleware, validId, deleteUserController);
router.put(
  '/users/:id/email',
  middleware,
  validId,
  validateEmail,
  updateUserMailController
);
router.put(
  '/users/:id/password',
  middleware,
  validId,
  validatePassword,
  updateUserPasswordController
);
router.put(
  '/users/:id/user_lock',
  middleware,
  validId,
  setUserLockoutController
);
router.get('/users', middleware, fetchUsersController);

export default router;
