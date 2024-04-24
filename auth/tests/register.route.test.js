const request = require('supertest');
const app = require('../src/app');
const userService = require('../src/services/user.service');
const authService = require('../src/services/auth.service');

const username = 'testUser';
const password = 'hashedPassword';
const userData = { username, password };
describe('Auth Routes', () => {
  beforeAll(async () => {
    await userService.remoevAll();
  });

  beforeEach(async () => {
    authService.register = jest.fn();
  });

  it('should register a new user', async () => {

    const res = await request(app).post('/auth/register').send(userData);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('user');
    expect(authService.register).toHaveBeenCalled();
    expect(res.body.user.username).toBe(userData.username);
  });

  it('should handle existing username during registration', async () => {
    const res = await request(app).post('/auth/register').send(userData);

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      errors: [{ username: 'Username is already taken' }],
    });
  });

  it('should handle missing username during registration', async () => {
    const userData = { password };

    const res = await request(app).post('/auth/register').send(userData);

    expect(res.status).toBe(400);
    expect(authService.register).not.toHaveBeenCalled();
  });

  it('should handle missing password during registration', async () => {
    const userData = { username };

    const res = await request(app).post('/auth/register').send(userData);

    expect(res.status).toBe(400);
    expect(authService.register).not.toHaveBeenCalled();
  });

  it('should handle empty request body during registration', async () => {
    const res = await request(app).post('/auth/register');

    expect(res.status).toBe(400);
    expect(authService.register).not.toHaveBeenCalled();
  });
});
