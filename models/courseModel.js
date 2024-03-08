const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const courseSchema = mongoose.Schema({
  name: String,
  duration: String,
  rating: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("courses", courseSchema);
