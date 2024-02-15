const mongoose = require("mongoose");

const userPrefSchema = new mongoose.Schema({
    email: {
      type: String,
      max: 20,
      required: true,
      unique: true,
    },
    preferredGenres: [Number]
  });

module.exports = mongoose.model("userpref", userPrefSchema);