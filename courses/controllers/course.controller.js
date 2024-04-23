const courseService = require("../services/course.service");

exports.findAll = (req, res) => {
  courseService.findAll();
};

exports.findById = (req, res) => {
  const { id } = req.params;
  courseService.findById(id);
};

exports.create = (req, res) => {
  const { name, description, price } = req.body;
  const instructorId = req.user.id;
  courseService.create({ name, description, price, instructorId });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const courseDto = req.body;
  courseService.update(id, courseDto);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  courseService.remove(id);
};
