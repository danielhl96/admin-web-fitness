import { expect, describe } from '@jest/globals';
import {
  deleteAdmin,
  fetchAdmins,
  hashPassword,
  loginAdmin,
  registerAdmin,
} from '../../service/admin.service';

describe('AdminService', () => {
  it('should create an admin', async () => {
    const admin = await registerAdmin('master@admin.de', 'password123');
    expect(admin).toHaveProperty('email', 'master@admin.de');
    console.log(admin);
  });
});

describe('AdminService', () => {
  it('should not create an admin', async () => {
    const admin = await registerAdmin('master@admin.de', 'password123');
    expect(admin).toThrow('Email already in use');
    console.log(admin);
  });
});

describe('AdminService', () => {
  it('should fetch admins', async () => {
    const admins = await fetchAdmins();
    expect(admins).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ email: 'admin@master.de' }),
        expect.objectContaining({ email: 'master@admin.de' }),
      ])
    );
    console.log(admins);
  });
});

describe('AdminService', () => {
  it('should return a token', async () => {
    const fetchAdmin = await loginAdmin('master@admin.de', 'password123');
    expect(fetchAdmin).toHaveProperty('token');
  });
});

describe('AdminService', () => {
  it('should not delete an master admin', async () => {
    const fetchAdmin = await fetchAdmins();
    const admin = await deleteAdmin(fetchAdmin[0].id);
    expect(admin).toThrow('Admin not found');
    console.log(admin);
  });
});

describe('AdminService', () => {
  it('should create an hased password', async () => {
    const password = await hashPassword('password123');
    expect(password).not.toBe('password123');
  });
});

describe('AdminService', () => {
  it('should delete an admin', async () => {
    const fetchAdmin = await fetchAdmins();
    const admin = await deleteAdmin(fetchAdmin[0].id);
    expect(admin).toHaveReturned();
    console.log(admin);
  });
});
