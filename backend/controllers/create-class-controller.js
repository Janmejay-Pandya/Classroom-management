const createClass = require('../models/create-class');

//create class logic
const create_class = async (req, res) => {
    try {
        const { addclass } = req.body;
        const classExist = await createClass.findOne({ addclass });
        if (classExist) {
            return res.status(400).json({ message: "Class already Exits" });
        }
        const classCreated = await createClass.create({ addclass });
        res.status(201).json({ msg: "Class Created Successfull" });
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }

}

module.exports = { create_class };