const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  studentNumber: {
    type: Number,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  country: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  program: {
    type: String,
  },
  fieldOfInterest: {
    type: String,
  },
  hobbies: {
    type: String,
  },
  role: {
    type: String,
    enum: ["student", "admin"],
  },
});
// hash password before saving to database
userSchema.pre("save", async function (next) {
  // Check if the password field has been modified
  if (!this.isModified("password")) {
    // If not, call next() to proceed with saving the document

    return next();
  }
  // Hash the password before saving it to the database
  this.password = await bcrypt.hash(this.password, 12);
  next(); // Call next() to proceed with saving the document
});
const User = mongoose.model("User", userSchema);

module.exports = User;
