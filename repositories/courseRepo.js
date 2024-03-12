const CourseModel = require("../models/courseModel");

const get = () => {
  return CourseModel.find();
};

module.exports = {
  get,
};
