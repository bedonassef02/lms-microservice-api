const gradesRouter = require("../routes/grades.router");

exports.configureRoutes = (app) => {
  app.use("/grades", gradesRouter);
};
