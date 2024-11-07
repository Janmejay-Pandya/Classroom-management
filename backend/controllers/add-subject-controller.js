const subjectModel = require('../models/add-subject-model');

//Add Subject to database
const createSubject = async (req, res) => {
    try {
        const { subjects } = req.body;

        if (!subjects || !Array.isArray(subjects)) {
            return res.status(400).json({ message: "Invalid data format. Expected an array of subjects." });
        }
        const createdSubjects = [];
        for (const subjectData of subjects) {
            const { subject, code, session } = subjectData;
            // Check if the code already exists
            const codeExist = await subjectModel.findOne({ code });
            if (codeExist) {
                return res.status(400).json({ message: `Code ${code} already used` });
            }
            // Create and save the new subject
            const newSubject = await subjectModel.create({ subject, code, session });
            createdSubjects.push(newSubject);
        }
        return res.status(201).json({ message: "Subjects created successfully", data: createdSubjects });
    } catch (error) {
        console.error("Error creating subjects:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

//Get All the Subjects from the database
const getSubject = async (req, res) => {
    try {
        const response = await subjectModel.find();
        if (!response) {
            res.status(404).json({ msg: "No Subjects were found" });
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`Subject ${error}`);
    }
};

// Retrieve all subjects

// Update a subject by ID

// const updateSubject = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { subject, code, session } = req.body;

//         const updatedSubject = await Subject.findByIdAndUpdate(id, { subject, code, session }, { new: true });

//         if (!updatedSubject) {
//             return res.status(404).json({ message: 'Subject not found' });
//         }

//         return res.status(200).json({ message: 'Subject updated successfully', subject: updatedSubject });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error', error });
//     }
// };

// Delete a subject by ID

// const deleteSubject = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const deletedSubject = await Subject.findByIdAndDelete(id);

//         if (!deletedSubject) {
//             return res.status(404).json({ message: 'Subject not found' });
//         }

//         return res.status(200).json({ message: 'Subject deleted successfully' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error', error });
//     }
// };

module.exports = { createSubject, getSubject };