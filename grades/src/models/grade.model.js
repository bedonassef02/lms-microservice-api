const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  courseId: {
    type: Number,
    required: true,
  },
  score:{
    type: Number,
    required: true,
  }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;