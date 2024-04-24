const jwt = require('jsonwebtoken');

exports.generate = ({ id, email, role }) => {
 return jwt.sign({ id, email, role }, 'your_jwt_secret', {
    expiresIn: '24h',
 });
};

exports.verify = token => {
 try {
    // Use the same secret key used in the generate function
    const secret = 'your_jwt_secret';
    const decoded = jwt.verify(token, secret);
    return decoded;
 } catch (error) {
    // If the token is invalid or expired, throw a custom error
    throw new Error('Invalid or expired token');
 }
};
