const express = require("express");
const morgan = require("morgan");
const { limiter } = require("../utils/limiter");

exports.configureMiddleware = (app) => {
  app.use(express.json({ limit: "10mb" }));

  app.use(express.json());

  app.use(limiter);

  // Middleware to log HTTP requests
  app.use(morgan("dev"));
};
