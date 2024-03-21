const UserModel = require("../models/usersModel");

const post = (data) => {
  const user = new UserModel(data);
  return user.save();
};

const get = () => {
  return UserModel.find({}, { _v: 0 });
};

module.exports = { post, get };
