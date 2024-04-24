const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
exports.generate = ({ id, email, role }) => {
  return jwt.sign({ id, email, role }, JWT_SECRET_KEY, {
    expiresIn: '24h',
  });
};

exports.verify = token => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};
