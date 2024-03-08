const courseCtrl = require("../controller/courseCtrl");
const express = require("express");
const router = express.Router();

router.get("/", courseCtrl.getAllCourses);

module.exports = router;
