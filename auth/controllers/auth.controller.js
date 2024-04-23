const authService = require('../services/auth.service');
const passport = require('../strategies/local.strategy');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const user = await authService.register(username, password);
  res.status(200).json({ user });
};

exports.login = async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : 'Login failed',
          user: user,
        });
      }

      // Proceed with token generation
      const token = await authService.login(user);

      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

      return res.json({ token });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
