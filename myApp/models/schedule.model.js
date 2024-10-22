const mongoose = require('mongoose');

const SessionsSubSchema = mongoose.Schema ({
    day: {
        type: Number,
        required: true,
        default:1
    },
    startTime: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    room: {
        type: String,
        required: true
    }
});
const ScheduleSchema = mongoose.Schema ({
    courseName: {
        type: String,
        required: [true,"please enter the course name"],
    },
    courseTitle: {
        type: String,
        required: [true, "please enter the course title"],
    },
    sessions: {
        type:[SessionsSubSchema]
    },
},
{
    timestamps: true
});

const Course = mongoose.model("Course",ScheduleSchema);

module.exports = Course;

