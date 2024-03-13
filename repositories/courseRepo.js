const CourseModel = require("../models/courseModel");

const get = () => {
  return CourseModel.find();
};

const updateCourse = (id, data) => {
  return CourseModel.findOneAndUpdate(
    { _id: id },
    {
      isActive: data.isActive,
      name: data.name,
      rating: data.rating,
      duration: data.duration,
    }
  );
};

const patch = (id, data) => {
  return CourseModel.findOneAndUpdate({ _id: id }, data);
};

const deleteCourse = (id) => {
  return CourseModel.deleteOne({ _id: id });
};

module.exports = {
  get,
  updateCourse,
  patch,
  deleteCourse,
};
