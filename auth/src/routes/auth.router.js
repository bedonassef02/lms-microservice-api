const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const registerPipe = require('../utils/pipes/register.pipe');

router.post(
  '/register',
  registerPipe,
  authController.register
);

router.post('/login', authController.login);

module.exports = router;
