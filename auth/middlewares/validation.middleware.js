const { validationResult } = require('express-validator');

// Middleware to handle validation errors
const validationMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors
      .array()
      .map(error => ({ [error.path]: error.msg }));
    return res.status(422).json({ errors: extractedErrors });
  }
  next();
};

module.exports = validationMiddleware;
