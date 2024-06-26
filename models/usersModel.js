const mongoose = require("mongoose");
//const Schema = new mongoose.Schema();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  role: { type: String, default: 2 },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", userSchema);

// {
//   0: "SuperAdmin",
//   1: "Admin",
//   2: "User"
// }
