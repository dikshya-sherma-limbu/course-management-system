const Course = require("../models/courseModel");
// get all courses
const getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find();
    console.log("allCourses: ", allCourses);
    if (allCourses) {
      res.status(200).json(allCourses); // return all courses in json format
    } else {
      res.status(404).json({ message: "No courses found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete course by course-name
const deleteCourse = async (req, res) => {
  try {
    const courseName = req.params.courseName;
    const course = await Course.findOneAndDelete({ courseName });
    if (course) {
      res.status(200).json({ message: "Course deleted successfully" });
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update course by course-name
const updateCourse = async (req, res) => {
  try {
    const courseName = req.params.courseName;
    // find course by course-name and update it - any field can be updated
    const updateCourse = await Course.findOneAndUpdate(
      { courseName },
      req.body,
      {
        new: true,
      }
    );
    if (updateCourse) {
      res.status(200).json({ message: "Course updated successfully" });
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// list all course taken by a student
const getCourseByStudentNumber = async (req, res) => {
  try {
    const studentNumber = req.params.studentNumber;
    const courses = await Course.find({ studentNumber });
    if (courses) {
      res.status(200).json(courses);
    } else {
      res.status(404).json({ message: "No courses found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add course to student
const addCourse = async (req, res) => {
  // get course as a courseModel object
  const { courseName } = req.body;

  // get the logged in user id
  const userId = req.userId;

  try {
    // Check if the course is already registered
    const existingCourse = await Course.findOne({ courseName });
    if (existingCourse) {
      return res.status(400).json({ message: "Course already exists" });
    }
    // Create a new course
    const course = new Course({
      ...req.body,
      students: [userId],
    });
    await course.save();

    res.status(201).json({ message: "Course added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCourses,
  deleteCourse,
  updateCourse,
  getCourseByStudentNumber,
  addCourse,
};
