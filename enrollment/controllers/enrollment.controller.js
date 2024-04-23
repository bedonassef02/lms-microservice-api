const enrollmentService = require("../services/enrollment.service");

exports.enroll = (req, res) => {
  const { courseId } = req.body;
  const studentId = req.user.id;
  enrollmentService.enroll({courseId, studentId});
};

exports.findAll = (req, res) => {}