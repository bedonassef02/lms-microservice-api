const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const loginPipe = require('../utils/pipes/login.pipe');
const registerPipe = require('../utils/pipes/register.pipe');

router.post('/register', registerPipe, authController.register);

router.post('/login', loginPipe, authController.login);

module.exports = router;
