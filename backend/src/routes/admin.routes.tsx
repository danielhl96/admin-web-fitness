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

const router = express.Router();

router.get('/admins', middleware, fetchAdminsController);
router.post('/admins/register', middleware, registerAdminController);
router.post('/admins/login', loginAdminController);
router.post('/admins/logout', middleware, logoutAdminController);
router.delete('/admins/delete/:id', middleware, deleteAdminController);
router.post('/admins/refresh_token', middleware, refreshAdminTokenController);
router.get('/admins/check_auth', middleware, (req, res) => {
  res.status(200).json({ authenticated: true });
});

export default router;
