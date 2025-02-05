const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  country: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  fieldOfInterest: {
    type: String,
  },
  hobbies: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
