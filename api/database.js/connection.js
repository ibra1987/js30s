const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MANGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected successfuly");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection;
