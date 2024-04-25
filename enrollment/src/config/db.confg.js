const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lms-enrollment", "root", "p@ssword", {
  host: "postgres", // Change hostname to "postgres"
  dialect: "postgres",
  logging: false,
});

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

module.exports = sequelize;