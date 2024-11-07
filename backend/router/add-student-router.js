const createStudent = require("../controllers/add-student-controller");
const express=require('express');
const router = express.Router();

// Route to add a new student
router.post("/addstudent", createStudent.addStudent);

//Router for student login
router.post("/LoginStudent", createStudent.student_login);

// Route to get all classes
router.get("/getClasses", createStudent.getClasses);

//route to get all the students
router.route("/dispstudent").get(createStudent.getStudent);

module.exports = router;