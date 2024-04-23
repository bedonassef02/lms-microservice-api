const gradesService = require("../services/grades.service");

exports.assign = (req, res) => {
  const { courseId, grade, studentId } = req.body;
  gradesService.assign({ courseId, grade, studentId });
};

