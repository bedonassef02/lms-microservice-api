const request = require('supertest');
const app = require('../src/app');
const authService = require('../src/services/auth.service');

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const randomValue = Math.random().toString(36).substring(7);
    const userData = {
      username: `testUser${randomValue}`,
      password: 'hashedPassword',
    };

    const res = await request(app)
      .post('/auth/register')
      .send(userData);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.username).toBe(userData.username);
  });

  it('should handle existing username during registration', async () => {
    const userData = {
      username: 'testUser',
      password: 'hashedPassword',
    };

    // Mocking the register function to return a rejected promise with an error indicating the username already exists
    authService.register = jest.fn().mockRejectedValue(new Error('Username already exists'));

    const res = await request(app)
      .post('/auth/register')
      .send(userData);

    expect(res.status).toBe(400);
    expect(authService.register).not.toHaveBeenCalled();
  });

  it('should handle missing username during registration', async () => {
    const userData = {
      password: 'hashedPassword',
    };

    const res = await request(app)
      .post('/auth/register')
      .send(userData);

    expect(res.status).toBe(400);
    expect(authService.register).not.toHaveBeenCalled();
  });

  it('should handle missing password during registration', async () => {
    const userData = {
      username: 'testUser',
    };

    const res = await request(app)
      .post('/auth/register')
      .send(userData);

    expect(res.status).toBe(400);
    expect(authService.register).not.toHaveBeenCalled();
  });

  it('should handle empty request body during registration', async () => {
    const res = await request(app)
      .post('/auth/register');

    expect(res.status).toBe(400);
    expect(authService.register).not.toHaveBeenCalled();
  });

  it('should login user', async () => {
    const userData = {
      username: 'testUser',
      password: 'hashedPassword',
    };

    const res = await request(app)
      .post('/auth/login')
      .send(userData);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  // Add more test cases for edge cases, invalid inputs, etc.
});
