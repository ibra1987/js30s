const express = require("express");
const { getUsers, createUser } = require("./usersController");
const { usersValidator } = require("./usersValidator");

const router = express.Router();

// @post Create new user
router.post("/", usersValidator, createUser);

// @Get all users
router.get("/", getUsers);

router;

module.exports = router;
