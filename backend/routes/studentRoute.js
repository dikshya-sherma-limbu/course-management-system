const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();
const {
  getAllStudents,
  getStudentsByCourse,
  addStudent,
} = require("../controllers/studentController");

//  Protected routes with authMiddleware - verify the token of the user
router.use(authMiddleware);
// Protected routes with roleMiddleware - only admin can access these routes
router.use(roleMiddleware("admin"));
router.get("/all-student", getAllStudents);
router.get("/:program", getStudentsByCourse);
router.post("/add-student", addStudent);

module.exports = router;
