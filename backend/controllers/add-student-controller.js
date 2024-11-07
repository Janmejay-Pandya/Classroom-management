const { Student, Class } = require("../models/add-student-model");

//Add student logic
const addStudent = async (req, res) => {
    try {
        const { stdname, stdrollnumber, stdpassword, studentclass } = req.body;

        // Check if roll number already exists
        const studentExists = await Student.findOne({ stdrollnumber });
        if (studentExists) {
            return res.status(400).json({ message: "Student with this roll number already exists" });
        }

        // Create new student
        const newStudent = await Student.create({
            stdname,
            stdrollnumber,
            stdpassword,
            studentclass,
        });
        await newStudent.save();
        return res.status(201).json({ message: "Student added successfully", student: newStudent });
    } catch (error) {
        console.error("Error adding student:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Fetch classes from the database
const getClasses = async (req, res) => {
     try {
        console.log("Fetching classes from DB");
        const classes = await Class.find();
        console.log("Classes fetched:", classes);
        res.status(200).json(classes);
    } catch (error) {
        console.error("Error fetching classes:", error);
        res.status(500).json({ message: "Error fetching classes" });
    }
};

// student login logic
const student_login = async (req, res) => {
    try {
        const { stdrollnumber, stdpassword } = req.body;

        // Check if the student exists and validate password
        const student = await Student.findOne({ stdrollnumber });
        if (!student || !(await student.comparePassword(stdpassword))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Generate a token (JWT) for the logged-in student
        const token = await student.generateToken();
        return res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
// const student_login = async (req, res) => {
//     try {
//         const { stdrollnumber, stdpassword } = req.body;
//         const student = await Student.findOne({ stdrollnumber });
//         console.log(student);
//         if (!student || student.stdpassword !== stdpassword) {
//             alert("Invalid Credentials");
//             return res.status(400).json({ msg: "Invalid Credentials" });
//         }
//         const user=await 
//         if (student && student.stdpassword == stdpassword) {
//             const token = await student.generateToken();
//             const response = {
//                 msg: "Student Login Successfull",
//                 token: token,
//                 userId: student._id.toString()
//             }
//             console.log("Student login response",response);
//         }
//         else {
//             res.status(401).json("Internal server error from the student login side ");
//         }
//     } catch (error) {
//         res.status(500).json( "Internal error from student login "+ error);
//     }
// };

//Display all the student
const getStudent = async (req, res) => {
    try {
        const response = await Student.find();
        if (!response) {
            res.status(404).json({ msg: "No student found" });
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`Student ${error}`);
    }
};

module.exports = { addStudent, getClasses, student_login, getStudent };