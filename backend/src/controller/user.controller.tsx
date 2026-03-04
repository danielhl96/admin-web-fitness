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

export const createUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await createUser(email, password);
    res.status(201).json({
      message: 'User created successfully',
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

export const fetchUsersController = async (req: Request, res: Response) => {
  try {
    const users = await fetchUsers();
    res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = Number(id);

  if (isNaN(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    await deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};

export const updateUserMailController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email } = req.body;
  const userId = Number(id);

  if (isNaN(userId) || !email) {
    return res.status(400).json({ message: 'Invalid user ID or email' });
  }

  try {
    await updateUserMail(userId, email);
    res.status(200).json({ message: 'User email updated successfully' });
  } catch (error) {
    console.error('Error updating user email:', error);
    res.status(500).json({ message: 'Error updating user email' });
  }
};

export const updateUserPasswordController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { password } = req.body;
  const userId = Number(id);

  if (isNaN(userId) || !password) {
    return res.status(400).json({ message: 'Invalid user ID or password' });
  }

  try {
    await updateUserPassword(userId, password);
    res.status(200).json({ message: 'User password updated successfully' });
  } catch (error) {
    console.error('Error updating user password:', error);
    res.status(500).json({ message: 'Error updating user password' });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = Number(id);

  if (isNaN(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

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
    console.error('Error retrieving user:', error);
    res.status(500).json({ message: 'Error retrieving user' });
  }
};

export const setUserLockoutController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { locked } = req.body;
  const userId = Number(id);

  if (isNaN(userId) || typeof locked !== 'boolean') {
    return res
      .status(400)
      .json({ message: 'Invalid user ID or lockout status' });
  }

  try {
    await setUserLockout(userId, locked);
    res
      .status(200)
      .json({ message: `User lockout status updated to ${locked}` });
  } catch (error) {
    console.error('Error updating user lockout status:', error);
    res.status(500).json({ message: 'Error updating user lockout status' });
  }
};
