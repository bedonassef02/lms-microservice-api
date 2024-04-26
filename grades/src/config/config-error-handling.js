const { errorHandler } = require("../utils/error-handling");
const { notFoundException } = require("../utils/not-found-exception");

exports.configureErrorHandling = (app) => {
  app.use(notFoundException);
  app.use(errorHandler);
};
