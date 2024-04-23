const jwt = require('jsonwebtoken');

exports.generate = ({ id, email, role }) => {
  return jwt.sign({ id, email, role }, 'your_jwt_secret', {
    expiresIn: '24h',
  });
};

exports.verify = token => {};
