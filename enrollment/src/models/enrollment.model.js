const Sequelize = require('sequelize'); // Make sure to import Sequelize
const sequelize = require("../config/db.confg"); // Assuming this is your Sequelize instance

const Enrollment = sequelize.define(
 "Enrollment",
 {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    courseId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
 },
 {
    timestamps: true,
 }
);

module.exports = Enrollment;
