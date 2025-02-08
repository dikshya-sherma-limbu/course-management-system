//pw-dbCourseManagement

//username-dikshyashermalimbu

const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/dbConfig");
const app = express(); // Initialize Express app
const cookieParser = require("cookie-parser");

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser
dbConnection(); // Connect to database
app.use(cookieParser()); // Middleware to parse cookies

// Routes
const userRoute = require("./routes/userRoute");
const studentRoute = require("./routes/studentRoute");
const courseRoute = require("./routes/courseRoute");

app.use("/api/users", userRoute);
app.use("/api/students", studentRoute);
app.use("/api/courses", courseRoute);
module.exports = app;
