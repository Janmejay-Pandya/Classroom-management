const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const teacherSchema = new mongoose.Schema({
    teachername: {
        type: String,
        required:true
   }, 
    teacheremail: {
        type: String,
        required: true,
        unique:true
   }, 
    teacherpassword: {
        type: String,
        required:true
   }, 
});


//secure password with bcrypt
teacherSchema.pre('save', async function (next) {
    if (this.isModified('teacherpassword')) {
        const salt = await bcrypt.genSalt(10);
        this.teacherpassword = await bcrypt.hash(this.teacherpassword, salt);
    }
    next();
});

//compare password
// teacherSchema.methods.comparePassword = async function (teacherpassword) {
//     return bcrypt.compare(teacherpassword, this.teacherpassword);
// }
teacherSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.teacherpassword);
};

//JWT
teacherSchema.methods.generateToken = function () {
    // Replace 'your_jwt_secret' with a proper secret key (preferably from an environment variable)
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '20d' });
};


module.exports = mongoose.model("teacher", teacherSchema, "Teacher Data");