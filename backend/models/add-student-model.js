const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Student Model
const studentSchema = new mongoose.Schema({
    stdname: {
        type: String,
        required: true,
    },
    stdrollnumber: {
        type: Number,
        required: true,
        unique: true,
    },
    stdpassword: {
        type: String,
        required: true,
    },
    studentclass: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("Student", studentSchema,"Student Data");

// Class Model
const classSchema = new mongoose.Schema({
    classes: {
        type: String,
        required: true,
    },
});

//Secure the password with bcrypt

studentSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("stdpassword")) {
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.stdpassword, saltRound);
        user.stdpassword = hash_password;
    } catch (error) {
        next(error);
    }
});

//compare password
studentSchema.methods.comparePassword = async function (stdpassword) {
    return bcrypt.compare(stdpassword, this.stdpassword);
}

//JWT
// studentSchema.methods.generateToken = async function () {
//     try {
//         console.log(process.env)
//         return jwt.sign(
//             {
//                 userId: this._id.toString(),
//                 stdrollnumber: this.stdrollnumber,
//                 isAdmin: this.isAdmin
//             },
//             "JANMEJAYPANDYA",
//             {
//                 expiresIn: "20d",
//             }
//         );
//     } catch (error) {
//         console.error(error);
        
//     }
// }
studentSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                stdrollnumber: this.stdrollnumber,
                isAdmin: this.isAdmin
            },
            "JANMEJAYPANDYA",
            {
                expiresIn: "20d",
            }
        );
    } catch (error) {
        console.error(error);
    }
}


const Class = mongoose.model("Class", classSchema);

module.exports = { Student, Class };
