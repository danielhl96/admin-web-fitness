import app from '../../../app';
import request from 'supertest';
import { prisma, prismaUser } from '../../../prisma/Prisma';

//agent to persist cookies across requests
const agent = request.agent(app);

describe('Integration Test', () => {
  var adminid = 0;
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
    const loginResponse = await agent.get('/api/admins/').send();
    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toHaveProperty('admins');
  });

  //Login with valid credentials to get the token for the following tests

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
    adminid = response.body.adminId;
    console.log('Response:', response.body);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty(
      'message',
      'Admin registered successfully'
    );
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

  it('should return 200 for deleting an admin', async () => {
    const response = await agent.delete(`/api/admins/delete/${adminid}`).send();
    console.log('Response:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Admin deleted successfully' });
  });

  it('should return 200 for check_auth endpoint with valid token', async () => {
    const response = await agent.get('/api/admins/check_auth').send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ authenticated: true });
  });

  it('should return 200 for refresh_token endpoint with valid token', async () => {
    const response = await agent.post('/api/admins/refresh_token').send();
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      'message',
      'Admin token refreshed successfully'
    );
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

describe('Integration Test for user endpoints', () => {
  var userid = 0;
  beforeAll(async () => {
    await prisma.$connect();
    await prismaUser.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await prismaUser.$disconnect();
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

  it('should return 200 for the fetch users endpoint with valid token', async () => {
    // First, log in to get the token
    const userResponse = await agent.get('/api/users/').send();
    expect(userResponse.status).toBe(200);
    expect(userResponse.body).toHaveProperty('users');
  });

  it('should return 201 for registering a new user with valid data', async () => {
    const response = await agent.post('/api/users/register').send({
      email: 'gast@gasttest.de',
      password: 'Gast123@',
    });
    userid = response.body.userId;
    console.log('Response:', response.body);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty(
      'message',
      'User created successfully'
    );
  });

  it('should return 400 for registering a new user with existing email', async () => {
    const response = await agent.post('/api/users/register').send({
      email: 'gast@gasttest.de',
      password: 'Gast123@',
    });
    console.log('Response:', response.body);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Email already in use',
    });
  });
  it('should return 200 for locking out a user', async () => {
    const lockResponse = await agent
      .put(`/api/users/${userid}/user_lock`)
      .send({ locked: true });
    console.log('Response:', lockResponse.body);
    expect(lockResponse.status).toBe(200);
    expect(lockResponse.body).toEqual({
      message: 'User lockout status updated to true',
    });
  });

  it('should return 200 for unlocking a user', async () => {
    const unlockResponse = await agent
      .put(`/api/users/${userid}/user_lock`)
      .send({ locked: false });
    console.log('Response:', unlockResponse.body);
    expect(unlockResponse.status).toBe(200);
    expect(unlockResponse.body).toEqual({
      message: 'User lockout status updated to false',
    });
  });

  it('should return 200 for updating a user email', async () => {
    const response = await agent
      .put(`/api/users/${userid}/email`)
      .send({ email: 'newgast@gasttest.de' });
    console.log('Response:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'User email updated successfully',
    });
  });

  it('should return 200 for updating a user password', async () => {
    const response = await agent
      .put(`/api/users/${userid}/password`)
      .send({ password: 'NewGast123@' });
    console.log('Response:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'User password updated successfully',
    });
  });
  it('should return 404 for updating a user password with non-existing user', async () => {
    const response = await agent
      .put(`/api/users/9999/password`)
      .send({ password: 'NewGast123@' });
    console.log('Response:', response.body);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: 'User not found',
    });
  });

  it('should return 400 for updating a user password with a not valid id', async () => {
    const response = await agent
      .put(`/api/users/as/password`)
      .send({ password: 'NewGast123@' });
    console.log('Response:', response.body);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Invalid ID format',
    });
  });

  it('it shoud return 400 for updatating a user invalid password', async () => {
    const response = await agent
      .put(`/api/users/${userid}/password`)
      .send({ password: 'short' });
    console.log('Response:', response.body);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message:
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)',
    });
  });

  it('should return 400 for updating a user with existing email', async () => {
    const response = await agent
      .put(`/api/users/${userid}/email`)
      .send({ email: 'gast@gast.de' });
    console.log('Response:', response.body);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Email already in use',
    });
  });

  it('should return 200 for deleting a user', async () => {
    const deleteResponse = await agent
      .delete(`/api/users/${userid}/delete`)
      .send();
    console.log('Response:', deleteResponse.body);
    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body).toEqual({
      message: 'User deleted successfully',
    });
  });
  it('should return 404 for deleting a user', async () => {
    const deleteResponse = await agent
      .delete(`/api/users/${userid}/delete`)
      .send();
    console.log('Response:', deleteResponse.body);
    expect(deleteResponse.status).toBe(404);
    expect(deleteResponse.body).toEqual({
      message: 'User not found',
    });
  });
});
