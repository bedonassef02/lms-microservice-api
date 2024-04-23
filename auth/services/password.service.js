const bcrypt = require('bcrypt');

exports.hash = async password => {
  return bcrypt.hash(password, 10);
};

exports.compare = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
