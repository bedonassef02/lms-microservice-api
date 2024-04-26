const express = require("express");
const { configureMiddleware } = require("./config/config-middlewares");
const { configureRoutes } = require("./config/config-routes");
const { configureErrorHandling } = require("./config/config-error-handling");

const app = express();

configureMiddleware(app);
configureRoutes(app);
configureErrorHandling(app);

module.exports = app;
