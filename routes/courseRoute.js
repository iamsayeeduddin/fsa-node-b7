const courseCtrl = require("../controller/courseCtrl");
const express = require("express");
const { verifyToken } = require("../utils/auth");
const router = express.Router();

router.get("/", courseCtrl.getAllCourses);
router.get("/page/:page/size/:pageSize", courseCtrl.getAllCourses);
router.get("/:id", courseCtrl.getCourse);
router.post("/create", verifyToken, courseCtrl.createCourse);
router.put("/update/:id", verifyToken, courseCtrl.putCourse);
router.patch("/update/:id", verifyToken, courseCtrl.patchCourse);
router.delete("/remove/:id", verifyToken, courseCtrl.remove);

module.exports = router;
