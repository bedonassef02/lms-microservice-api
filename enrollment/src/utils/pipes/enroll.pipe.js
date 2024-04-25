const { body } = require("express-validator");
const validationMiddleware = require("../../middlewares/validation.middleware");
const enrollmentService = require("../../services/enrollment.service");

const enrollPipe = [
  body("courseId")
    .isNumeric()
    .withMessage("Course ID must be a number")
    .custom(async (courseId, { req }) => {
      const userId = req.user.id;
      const existingCourse = await enrollmentService.findOne({ courseId, userId });
      if (existingCourse) {
        return Promise.reject("You have already registered for this course");
      }
      return true;
    }),
  validationMiddleware,
];

module.exports = enrollPipe;
