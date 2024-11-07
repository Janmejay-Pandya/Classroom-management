const addTeacher = require('../models/add-teacher-model');

const add_teacher = async (req, res) => {
    try {
        const { teachername, teacheremail, teacherpassword } = req.body;
        const userExist = await addTeacher.findOne({ teacheremail });
        if (userExist) {
            return res.status(400).json({ message: "Email already Registered" });
        }
        const userCreated = await addTeacher.create({ teachername, teacheremail, teacherpassword });
        res.status(201).json({ message: "Teacher added successfully" });
    } catch (error) {
        res.status(500).json("Internal server error ");
        
    }
};

//Login Teacher logic
const teacher_login = async (req, res) => {
    try {
        const { teacheremail, teacherpassword } = req.body;
        console.log("Request Body:", req.body);

        if (!teacheremail || !teacherpassword) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Ensure you're querying the right field (teacheremail instead of email)
        const userExist = await addTeacher.findOne({ teacheremail });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isValidPassword = await userExist.comparePassword(teacherpassword);
        if (isValidPassword) {
            const token = await userExist.generateToken();
            return res.status(201).json({
                message: "Login Successful",
                token: token,
                userId: userExist._id.toString()
            });
        } else {
            return res.status(401).json({ message: "Invalid Password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { add_teacher, teacher_login };