const express = require("express");

const router = express.Router();
const {
  loginAuth,
  logoutAuth,
  registerAdmin,
} = require("..//controllers/authController");

router.post("/login", loginAuth);
router.post("/logout", logoutAuth);
// router.post("/register-student", registerStudent);
router.post("/register-admin", registerAdmin);
module.exports = router;
