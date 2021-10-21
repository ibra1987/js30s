const User = require("../../models/User");
const { validationResult } = require("express-validator");

// get users
exports.getUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (error) {
    res.json(error.message);
  }
};

//  create new user

exports.createUser = async (req, res) => {
  const { fullName, Password, Email } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newUser = new User({
      fullName,
      Password,
      Email,
    });

    const response = await newUser.save({ new: true });

    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
