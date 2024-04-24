const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');
const passwordService = require('../services/password.service');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await userService.findOne(username);
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username or password.',
        });
      }
      const isMatch = await passwordService.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, {
          message: 'Incorrect username or password.',
        });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET_KEY,
    },
    async function (jwt_payload, done) {
      try {
        const user = await userService.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  userService
    .findById(id)
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

module.exports = passport;
