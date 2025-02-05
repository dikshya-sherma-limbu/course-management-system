const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
    unique: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseSection: {
    type: String,
  },
  courseSemester: {
    type: String,
  },
  // get the student from the student model
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);
model.exports = Course;
