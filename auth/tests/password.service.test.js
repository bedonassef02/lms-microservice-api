const bcrypt = require('bcrypt');
const { hash, compare } = require('../src/services/password.service');

describe('Password Service', () => {
 const password = 'password123';

 it('should hash a password', async () => {
    const hashedPassword = await hash(password);
    expect(hashedPassword).toBeDefined();
    expect(await bcrypt.compare(password, hashedPassword)).toBe(true);
 });

 it('should compare a password with a hashed password', async () => {
    const hashedPassword = await hash(password);
    expect(await compare(password, hashedPassword)).toBe(true);
 });

 it('should return false for an incorrect password', async () => {
    const hashedPassword = await hash(password);
    expect(await compare('wrongPassword', hashedPassword)).toBe(false);
 });
});
