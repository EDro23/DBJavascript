const Student = require ("../models/student.model.js");

const getStudents = async (req, res) => {
    try {
        const students = await Student.find ({});
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById (id);
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findOne ({studentId:studentId});
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const updateStudentById = async (req, res) =>{
    try {
        const { studentId } = req.params;
        const student = await Student.updateOne ({studentId:studentId}, req.body);
        if (!student) {
            return (resp.status(404).json({message: "Student not found"}));
        }
        // we re-retrieve the course and reply with the retrieved version.
        const updatedStudent = await Student.findOne({studentId:studentId});
        res.status(200).json(updatedStudent);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const createStudent = async (req, res) => {
    try {
        const createStudent = await Student.create(req.body);
        res.status(200).json(createStudent);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

const updateStudent = async (req, res) => {
    try {
        const students = await Student.find ({});
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete (id);

        if (!student) {
            return res.status(404).json({message: "Course not found"});
        }
        
        res.status(200).json({ message: "Course deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const deleteStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.deleteOne ({studentId:studentId});

        if (!student) {
            return res.status(404).json({message: "Student not found"});
        }
        
        res.status(200).json({ message: "Student deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = {
    getStudents,
    getStudent,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    updateStudentById,
    deleteStudentById
};