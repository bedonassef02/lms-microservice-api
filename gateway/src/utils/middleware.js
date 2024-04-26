const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

module.exports = (app) => {
 // Middleware for logging HTTP requests
 app.use(morgan('dev'));

 // Security headers
 app.use(helmet());

 // Rate limiting
 const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes"
 });
 app.use(limiter);
};
