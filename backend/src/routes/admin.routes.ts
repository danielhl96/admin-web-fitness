import express from 'express';
import middleware from '../middleware/verifyAdmin';
import {
  fetchAdminsController,
  deleteAdminController,
  registerAdminController,
  loginAdminController,
  logoutAdminController,
  refreshAdminTokenController,
} from '../controller/admin.controller';
import { validateEmail } from '../helper/emailvalid';
import { validatePassword } from '../helper/passwordvalid';
import { validId } from '../helper/validId';

const router = express.Router();

router.get('/admins', middleware, fetchAdminsController);
router.post(
  '/admins/register',
  middleware,
  validateEmail,
  validatePassword,
  registerAdminController
);
router.post(
  '/admins/login',
  validateEmail,

  loginAdminController
);
router.post('/admins/logout', middleware, logoutAdminController);
router.delete('/admins/delete/:id', middleware, validId, deleteAdminController);
router.post('/admins/refresh_token', refreshAdminTokenController);
router.get('/admins/check_auth', middleware, (req, res) => {
  res.status(200).json({ authenticated: true });
});

export default router;
