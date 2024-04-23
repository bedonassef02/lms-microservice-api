const userService = require('../../services/user.service');

// Custom validator for checking if a username is already taken
const usernameIsUnique = async username => {
  const user = await userService.findOne(username);
  if (user) {
    throw new Error('Username is already taken');
  }
  return true;
};

module.exports = usernameIsUnique;
