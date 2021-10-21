const { check } = require("express-validator");

exports.usersValidator = [
  check("fullName", "Please fill in your full name").notEmpty(),
  check("Email", "Please enter a valid email adress").notEmpty().isEmail(),
];
