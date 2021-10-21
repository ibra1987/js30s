const mongoose = require("mongoose");
require("mongoose-type-email");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },

  Email: {
    type: mongoose.SchemaTypes.Email,
  },

  Password: {
    type: String,
  },

  //   isDevelopper: {
  //     type: Boolean,
  //     required: true,
  //   },

  //   currentJob: {
  //     type: String,
  //     default: null,
  //   },

  //   dateOfBirth:{

  //   }
});

module.exports = User = mongoose.model("user", userSchema);
