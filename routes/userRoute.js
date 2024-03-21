const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userCtrl");

router.post("/signup", userCtrl.createUser);
router.get("/", userCtrl.getAllUsers);

module.exports = router;
