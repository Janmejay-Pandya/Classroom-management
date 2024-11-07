const adminRegister = require('../models/admin_register');

//admin register logic
const admin_register = async (req, res) => {
    try {
        const { adminname, schoolname, adminemail, adminpassword } = req.body;
        const userExists = await adminRegister.findOne({ adminemail });
        if (userExists) {
            // alert("Email Already exists");
            return res.status(400).json({ message: "Email alredy Registered" });
        }
        const userCreated = await adminRegister.create({ adminname, schoolname, adminemail, adminpassword });
        res.status(201).json({ msg: "Registration Successfull" });
        
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
};

//admin login logic
const admin_login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const adminemail = email;
        const userExist = await  adminRegister.findOne({ adminemail });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const user = await userExist.comparePassword(password);
        if (user) {
            const token = await userExist.generateToken();
            const response = {
                msg: "Login Successfull",
                token: token,
                userId: userExist._id.toString()
            }
            console.log(response)
            res.status(201).json(response);
        }
        else {
            res.status(401).json( "Internal Server Error");
        }
    } catch (error) {
        res.status(500).json("Internal server error from catch statement" + error);
    }
}
module.exports = { admin_register, admin_login };