const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getAllCourses,
  deleteCourse,
  updateCourse,
  getCourseByStudentNumber,
  addCourse,
} = require("../controllers/courseController");

const router = express.Router();

// Proctected routes with authMiddleware
router.use(authMiddleware);

router.get("/all-courses", getAllCourses);
router.delete("/:courseName", deleteCourse);
router.put("/:courseName", updateCourse);
router.get("/:studentNumber", getCourseByStudentNumber);
router.post("/add-course", addCourse);
module.exports = router;
