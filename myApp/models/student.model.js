const mongoose = require('mongoose');

const StudentSubSchema = mongoose.Schema ({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required: true
    },
    startYear: {
        type: String,
        required: true,
    },
    startSemester: {
        type: String,
        required: true,
    },
    creditsEarned: {
        type: String,
        required: true,
    },
    gpa: {
        type: String,
        required: true
    }
});
const StudentSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    dob: {
        type: String,
        required: [true, "Please enter a dob"],
    },
    studentId: {
        type: String,
        required: [true, "Please enter an ID"],
    },
    program: {
        type: String,
        required: [true, "Please enter a program"],
    },
    startYear: {
        type: String,
        required: [true, "Please enter a start year"],
    },
    startSemester: {
        type: String,
        required: [true, "Please enter a start semester"],
    },
    creditsEarned: {
        type: String,
        required: [true, "Please enter credits earned"],
    },
    gpa: {
        type: String,
        required: [true, "Please enter GPA"],
    },
    sessions: {
        type: [StudentSubSchema]
    },
},
{
    timestamps: true
});

const Student = mongoose.model("Student",StudentSchema);

module.exports = Student;