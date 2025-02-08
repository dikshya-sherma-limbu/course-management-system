const User = require("../models/userModel");

// get all students

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await User.find({ role: "student" });
    if (allStudents) {
      res.status(200).json(allStudents);
    } else {
      res.status(404).json({ message: "No students found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get students by course-name
const getStudentsByCourse = async (req, res) => {
  try {
    const courseName = req.params.courseName;
    const students = await User.find({ program: courseName });
    if (students) {
      res.status(200).json(students);
    } else {
      res.status(404).json({ message: "No students found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addStudent = async (req, res) => {
  const {
    studentNumber,
    firstName,
    lastName,
    address,
    city,
    province,
    postalCode,
    country,
    phoneNumber,
    email,
    password,
    program,
    fieldOfInterest,
    hobbies,
    role,
  } = req.body;

  try {
    // Check if the email is already registered
    const existingStudent = await User.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new student
    const student = new User({
      studentNumber,
      firstName,
      lastName,
      address,
      city,
      province,
      postalCode,
      country,
      phoneNumber,
      email,
      password,
      program,
      fieldOfInterest,
      hobbies,
      role,
    });
    await student.save();

    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getAllStudents, getStudentsByCourse, addStudent };
