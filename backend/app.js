//pw-dbCourseManagement

//username-dikshyashermalimbu

const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/dbConfig");

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser
dbConnection(); // Connect to database

module.exports = app;
