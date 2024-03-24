const UserModel = require("../models/usersModel");

const post = (data) => {
  const user = new UserModel(data);
  return user.save();
};

const get = () => {
  return UserModel.find({}, { _v: 0 });
};

const getByEmail = (email) => {
  return UserModel.findOne({ email }, { email: 1, password: 1, name: 1 });
};

module.exports = { post, get, getByEmail };
