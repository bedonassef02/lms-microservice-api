const gradesService = require("../services/grades.service");

exports.assign = async (req, res) => {
  const { courseId, score, userId } = req.body;
  const grade = await gradesService.assign({ courseId, score, userId });
  res.status(201).json(grade);
};

exports.findUserGrade = async (req, res) => {
  const userId = req.user.id;
  const grades = await gradesService.findUserGrades(userId);
  res.status(200).json(grades);
};

exports.findCourseGrades = async (req, res) => {
  const id = req.params.courseId;
  const grades = await gradesService.findCourseGrades(id);
  res.status(200).json(grades);
};

exports.update = async (req, res) => {
  const { courseId, score, userId } = req.body;
  const grade = await gradesService.update({ courseId, score, userId });
  res.status(201).json(grade);
};