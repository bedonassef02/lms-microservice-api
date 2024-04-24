// auth.service.test.js

const authService = require('../src/services/auth.service')
const userService = require('../src/services/user.service');
const passwordService = require('../src/services/password.service');
const tokenService = require('../src/services/token.service');

// Mock the dependencies
jest.mock('../src/services/user.service');
jest.mock('../src/services/password.service');
jest.mock('../src/services/token.service');

describe('Auth Service', () => {
 beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
 });

 it('should register a user', async () => {
    // Arrange
    const username = 'testUser';
    const password = 'testPassword';
    const hashedPassword = 'hashedPassword';
    const user = { id: 1, username, password: hashedPassword };

    userService.create.mockResolvedValue(user);
    passwordService.hash.mockResolvedValue(hashedPassword);

    // Act
    const result = await authService.register(username, password);

    // Assert
    expect(passwordService.hash).toHaveBeenCalledWith(password);
    expect(userService.create).toHaveBeenCalledWith({ username, password: hashedPassword });
    expect(result).toEqual(user);
 });

 it('should login a user', async () => {
    // Arrange
    const user = { id: 1, username: 'testUser', password: 'hashedPassword' };
    const token = 'testToken';

    tokenService.generate.mockResolvedValue(token);

    // Act
    const result = await authService.login(user);

    // Assert
    expect(tokenService.generate).toHaveBeenCalledWith(user);
    expect(result).toEqual(token);
 });

 it('should throw an error during login', async () => {
    // Arrange
    const user = { id: 1, username: 'testUser', password: 'hashedPassword' };
    const error = new Error('Failed to generate token');

    tokenService.generate.mockRejectedValue(error);

    // Act and Assert
    await expect(authService.login(user)).rejects.toThrow(error);
 });
});
