import { expect, describe } from '@jest/globals';
import {
  deleteAdmin,
  fetchAdmins,
  hashPassword,
  loginAdmin,
  registerAdmin,
} from '../../service/admin.service';

describe('AdminService', () => {
  it('should create an hased password', async () => {
    const password = await hashPassword('password123');
    expect(password).not.toBe('password123');
  });
});
