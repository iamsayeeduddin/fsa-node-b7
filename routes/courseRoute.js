const courseCtrl = require("../controller/courseCtrl");
const express = require("express");
const router = express.Router();

router.get("/", courseCtrl.getAllCourses);
router.get("/:id", courseCtrl.getCourse);
router.post("/create", courseCtrl.createCourse);

module.exports = router;
