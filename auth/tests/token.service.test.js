const jwt = require('jsonwebtoken');
const { generate, verify } = require('../src/services/token.service');

describe('JWT Token Service', () => {
  const user = { id: 1, email: 'test@example.com', role: 'user' };
  const secret = 'your_jwt_secret';

  it('should generate a valid JWT token', () => {
    const token = generate(user);
    expect(token).toBeDefined();
  });

  it('should verify a valid JWT token', () => {
    const token = generate(user);
    const decoded = verify(token);

    const decodedUser = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };
    expect(decodedUser).toEqual(user);
  });

  it('should throw an error for an invalid JWT token', () => {
    const invalidToken = 'invalid.token';
    expect(() => verify(invalidToken)).toThrow('Invalid or expired token');
  });
});
