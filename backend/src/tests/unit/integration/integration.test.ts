import app from '../../../app';
import request from 'supertest';
import { prisma, prismaUser } from '../../../prisma/Prisma';

const agent = request.agent(app);

describe('Integration Test', () => {
  beforeAll(async () => {
    await prisma.$connect();
    await prismaUser.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await prismaUser.$disconnect();
  });

  it('should return 404 Not Found for the login endpoint with non-existing user', async () => {
    const response = await agent.post('/api/admins/login').send({
      email: 'test@example.com',
      password: 'password123',
    });
    console.log('Response:', response.body);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Admin not found' });
  });

  it('should return 200 OK for the login endpoint with existing user', async () => {
    const response = await agent.post('/api/admins/login').send({
      email: 'masteradmin@admin.de',
      password: 'admin123',
    });
    console.log('Response:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Admin logged in successfully' });
  });

  it('should return 200 for the fetch admins endpoint with valid token', async () => {
    // First, log in to get the token
    const loginResponse = await agent.get('/api/admins/').send();
    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toHaveProperty('admins');
  });

  it('should return 200 for the fetch users endpoint with valid token', async () => {
    // First, log in to get the token
    const userResponse = await agent.get('/api/users/').send();
    expect(userResponse.status).toBe(200);
    expect(userResponse.body).toHaveProperty('users');
  });

  it('should return 201 for registering a new admin', async () => {
    const response = await agent.post('/api/admins/register').send({
      email: 'master3@admin.de',
      password: 'Admin123@',
    });
    console.log('Response:', response.body);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Admin registered successfully' });
  });

  it('should return 400 for registering a new admin with existing email', async () => {
    const response = await agent.post('/api/admins/register').send({
      email: 'master3@admin.de',
      password: 'Admin123@',
    });
    console.log('Response:', response.body);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Email already in use',
    });
  });

  it('should return 201 for registering a new user with valid data', async () => {
    const response = await agent.post('/api/users/register').send({
      email: 'gast@gasttest.de',
      password: 'Gast123@',
    });
    console.log('Response:', response.body);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'User created successfully' });
  });

  it('should return 200 for logout', async () => {
    const response = await agent.post('/api/admins/logout').send();
    console.log('Response:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Admin logged out successfully' });
  });

  it('should return 400 Bad Request for the login endpoint with wrong password', async () => {
    const response = await agent.post('/api/admins/login').send({
      email: 'masteradmin@admin.de',
      password: 'wrongpassword',
    });
    console.log('Response:', response.body);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid password' });
  });

  it('should return 401 Unauthorized for the fetch users endpoint without token', async () => {
    const response = await request(app).get('/api/users/').send();
    console.log('Response:', response.body);
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: 'Unauthorized' });
  });

  it('should return 401 Unauthorized for the fetch admins endpoint without token', async () => {
    const response = await request(app).get('/api/admins/').send();
    console.log('Response:', response.body);
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: 'Unauthorized' });
  });
});
