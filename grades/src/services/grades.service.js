const Grade = require("../models/grade.model");

exports.assign = async ({ userId, courseId, score }) => {
  return Grade.create({ userId, courseId, score });
};

exports.findUserGrades = async (userId) => {
  return Grade.find({ userId });
};

exports.findCourseGrades = async (courseId) => {
  return Grade.find({ courseId });
};

exports.findUserGradeByCourseId = async ({ userId, courseId }) => {
  return Grade.findOne({ userId, courseId });
};

exports.update = async ({ userId, courseId, score }) => {
  return Grade.findOneAndUpdate(
    { userId, courseId },
    { score },
    { new: true }
  );
};
