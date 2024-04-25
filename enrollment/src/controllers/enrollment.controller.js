const enrollmentService = require("../services/enrollment.service");

exports.enroll = async (req, res) => {
  const { courseId } = req.body;
  const userId = req.user.id;
  const enrollment = await enrollmentService.enroll({ userId, courseId });
  res.status(201).json(enrollment);
};

exports.findAll = async (req, res) => {
  const userId = req.user.id;
  const enrollments = await enrollmentService.findAll({ userId });
  res.status(200).json(enrollments);
};

exports.findByCourseId = async (req, res) => {
  const { courseId } = req.params;
  const enrollments = await enrollmentService.findByCourseId({ courseId });
  res.status(200).json(enrollments);
};
exports.remove = async (req, res) => {
  const { courseId, userId } = req.params;
  await enrollmentService.remove({ courseId, userId });
  res.status(204).send();
};
