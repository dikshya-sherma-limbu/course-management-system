const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("../models/userModel");
dotenv.config(); // Load environment variables from .env file

const loginAuth = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("user " + user);
      console.log("This email is not registered");
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log("user " + user);
    const isMatch = await bcrypt.compare(password, user.password); //
    if (!isMatch) {
      console.log("Invalid password");
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const jwtToken = jwt.sign(
      { role: user.role }, // add the student number to the token
      process.env.JWT_SECRET_KEY, // secret key
      {
        expiresIn: process.env.JWT_EXPIRES_IN, // expiration time
      }
    );
    // set the token in the HTTPOnly cookie
    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true in production -mean only send cookie over HTTPS
      sameSite: "none", // prevent CSRF attacks - only send cookie if the request is coming from the same origin
      maxAge: 3600000, //  cookie will expire after 1 hour
    });
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log("Error logging in: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

const logoutAuth = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
};

// register admin
const registerAdmin = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    // Check if the email is already registered
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new admin
    const admin = new User({
      firstName,
      lastName,
      email,
      password,
      role,
    });
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { loginAuth, logoutAuth, registerAdmin };
