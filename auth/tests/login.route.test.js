const request = require('supertest');
const app = require('../src/app');
const userService = require('../src/services/user.service');
const authService = require('../src/services/auth.service');

const username = 'testUser';
const password = 'hashedPassword';

describe('Auth Routes', () => {
  beforeAll(async () => {
    await userService.remoevAll();
    await authService.register(username, password);
  });

  beforeEach(async () => {
    authService.login = jest.fn();
  });

  it('should login user', async () => {
    const userData = { username, password };

    const token = 'generatedToken';
    authService.login.mockResolvedValue({ token });

    const res = await request(app).post('/auth/login').send(userData);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should handle missing username during login', async () => {
    const userData = {
      password: 'hashedPassword',
    };

    const res = await request(app).post('/auth/login').send(userData);

    expect(res.status).toBe(400);
    expect(authService.login).not.toHaveBeenCalled();
  });

  it('should handle missing password during login', async () => {
    const userData = {
      username: 'testUser',
    };

    const res = await request(app).post('/auth/login').send(userData);

    expect(res.status).toBe(400);
    expect(authService.login).not.toHaveBeenCalled();
  });

  it('should handle empty request body during login', async () => {
    const res = await request(app).post('/auth/login');

    expect(res.status).toBe(400);
    expect(authService.login).not.toHaveBeenCalled();
  });

  it('should handle non-existent user during login', async () => {
    const userData = {
      username: 'nonExistentUser',
      password: 'hashedPassword',
    };

    authService.login.mockRejectedValue(new Error('User not found'));

    const res = await request(app).post('/auth/login').send(userData);

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      message: 'Incorrect username or password.',
      user: false,
    });
  });
});
