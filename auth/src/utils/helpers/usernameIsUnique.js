const userService = require('../../services/user.service');

const usernameIsUnique = async username => {
  const user = await userService.findOne(username);
  if (user) {
    throw new Error('Username is already taken');
  }
  return true;
};

module.exports = usernameIsUnique;
