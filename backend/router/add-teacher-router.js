const express = require('express');
const router = express.Router();
const AddTeacher = require("../controllers/add-teacher-controller");

router.route("/addteacher").post(AddTeacher.add_teacher);
router.route("/LoginTeacher").post(AddTeacher.teacher_login);

module.exports = router;