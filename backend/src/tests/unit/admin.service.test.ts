import { expect, describe } from '@jest/globals';
import {
  fetchAdmins,
  hashPassword,
  loginAdmin,
  registerAdmin,
  deleteAdmin,
  refreshAdminToken,
} from '../../service/admin.service';
import { prisma, prismaUser } from '../../prisma/Prisma';
beforeAll(async () => {
  await prisma.$connect();
  await prismaUser.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
  await prismaUser.$disconnect();
});

describe('AdminService', () => {
  var adminid: number;
  it('should create an hased password', async () => {
    const password = await hashPassword('password123');
    expect(password).not.toBe('password123');
  });

  it('should register a new admin', async () => {
    const admin = await registerAdmin('test@test.de', 'password123');
    expect(admin).toHaveProperty('id');
    expect(admin).toHaveProperty('email', 'test@test.de');
    adminid = admin.id;
  });

  it('should not register an admin with an existing email', async () => {
    await expect(registerAdmin('test@test.de', 'password123')).rejects.toThrow(
      'Email already in use'
    );
  });

  it('should fetch all admins', async () => {
    const admins = await fetchAdmins();
    expect(Array.isArray(admins)).toBe(true);
    expect(admins.length).toBeGreaterThan(0);
  });

  it('should login an admin', async () => {
    const token = await loginAdmin('test@test.de', 'password123');
    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
  });

  it('should not login with wrong  password', async () => {
    await expect(loginAdmin('test@test.de', 'wrongpassword')).rejects.toThrow(
      'Invalid password'
    );
  });

  it('should not login with wrong email', async () => {
    await expect(loginAdmin('test@st.de', 'wrongpassword')).rejects.toThrow(
      'Admin not found'
    );
  });

  it('should refresh an admin token', async () => {
    const refreshToken = await refreshAdminToken(adminid);
    expect(typeof refreshToken).toBe('string');
    expect(refreshToken.length).toBeGreaterThan(0);
  });

  it('should delete an admin', async () => {
    const deletedAdmin = await deleteAdmin(adminid);
    expect(deletedAdmin).toHaveProperty('id', adminid);
  });
});
