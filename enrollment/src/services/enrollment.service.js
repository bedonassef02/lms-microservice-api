const Enrollment = require("../models/enrollment.model");

exports.enroll = async ({ userId, courseId }) => {
  return Enrollment.create({ userId, courseId });
};

exports.findOne = async ({ userId, courseId }) => {
  return Enrollment.findOne({
    where: {
      userId,
      courseId,
    },
  });
};

exports.remove = async ({ courseId, userId }) => {
  return Enrollment.destroy({
    where: {
      courseId,
      userId,
    },
  });
};

exports.findAll = async ({ userId }) => {
  return Enrollment.findAll({
    where: {
      userId,
    },
  });
};

exports.findByCourseId = async ({ courseId }) => {
  return Enrollment.findAll({
    where: {
      courseId,
    },
  });
};
