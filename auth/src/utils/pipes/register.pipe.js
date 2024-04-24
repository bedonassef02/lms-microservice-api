const { body } = require('express-validator');
const validationMiddleware = require('../../middlewares/validation.middleware');
const usernameIsUnique = require('../helpers/usernameIsUnique');

const registerPipe = [
  body('username')
    .isLength({ min: 5 })
    .withMessage('Username must be at least 5 characters long')
    .custom(usernameIsUnique),
  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters long'),
  validationMiddleware,
];

module.exports = registerPipe;
