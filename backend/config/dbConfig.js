const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config(); // Load environment variables from .env file

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database: ", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = dbConnection;
