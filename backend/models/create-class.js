const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    addclass: {
        type: String,
        require:true
    }
});

const userClass = new mongoose.model("userClass", userSchema,"Class");
module.exports = userClass;