const Course = require("../models/courseModel");
const courseRepo = require("../repositories/courseRepo");

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseRepo.get();
    res.status(200).json(courses);
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
};

const createCourse = async (req, res) => {
  try {
    const body = req.body;
    body.createdAt = new Date();
    const course = new Course(body);
    await course.save();
    res.status(201).send("Added Succesfully!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    res.status(200).json(course);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllCourses,
  createCourse,
  getCourse,
};
