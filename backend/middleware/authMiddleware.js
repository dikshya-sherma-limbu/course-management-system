const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

//To verify the user authentication

// next is a function that will be called when the middleware has finished its job
const authMiddleware = (req, res, next) => {
  const token = req.cookies?.token;
  console.log("Token: ", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.role = decodeToken.role;
    next(); // tells middleware has finished its job
  } catch (error) {
    console.log("Error verifying token: ", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = authMiddleware;
