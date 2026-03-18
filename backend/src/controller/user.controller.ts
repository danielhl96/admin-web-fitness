import { Request, Response } from 'express';
import {
  createUser,
  getUserById,
  deleteUser,
  updateUserMail,
  updateUserPassword,
  setUserLockout,
  fetchUsers,
} from '../service/user.service';

export const createUserController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { email, password } = req.body;

  try {
    const user = await createUser(email, password);
    res.status(201).json({
      message: 'User created successfully',
      userId: user.id,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchUsersController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const users = await fetchUsers();
    res.status(200).json({ message: 'Users fetched successfully', users });
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { id } = req.params;
  const userId = Number(id);

  try {
    await deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const updateUserMailController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { id } = req.params;
  const { email } = req.body;
  const userId = Number(id);

  try {
    await updateUserMail(userId, email);
    res.status(200).json({ message: 'User email updated successfully' });
  } catch (error) {
    next(error);
  }
};

export const updateUserPasswordController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { id } = req.params;
  const { password } = req.body;
  const userId = Number(id);

  try {
    await updateUserPassword(userId, password);
    res.status(200).json({ message: 'User password updated successfully' });
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { id } = req.params;
  const userId = Number(id);

  try {
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      message: 'User    retrieved successfully',
      user: { id: user.id, email: user.email, locked: user.locked },
    });
  } catch (error) {
    next(error);
  }
};

export const setUserLockoutController = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { id } = req.params;
  const { locked } = req.body;
  const userId = Number(id);

  try {
    await setUserLockout(userId, locked);
    res
      .status(200)
      .json({ message: `User lockout status updated to ${locked}` });
  } catch (error) {
    next(error);
  }
};
