const userService = require('./user.service');
const passwordService = require('./password.service');
const tokenService = require('./token.service');

exports.register = async (username, password) => {
  const hashedPassword = await passwordService.hash(password);
  return await userService.create({ username, password: hashedPassword });
};

exports.login = async user => {
  try {
    return tokenService.generate(user);
  } catch (error) {
    throw error;
  }
};
