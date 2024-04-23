const express = require('express');
const session = require('express-session');
process.loadEnvFile('.env');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(cookieParser());


app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./routes/auth.router'));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
