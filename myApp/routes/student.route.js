const express = require("express");
const studentRouter = express.Router ();

const {getStudents,getStudent,createStudent,updateStudent,deleteStudent, getStudentById, deleteStudentById, updateStudentById} =
  require ("../controllers/student.controller.js");

  studentRouter.get ('/', getStudents);
  studentRouter.get ('/id=:id', getStudent);
  studentRouter.post ('/', createStudent);
  studentRouter.put ('/id=:id', updateStudent);
  studentRouter.delete ('/id=:id', deleteStudent);
  studentRouter.get ('/studentId=:studentId', getStudentById);
  studentRouter.delete ('/studentId=:studentId', deleteStudentById);
  studentRouter.put ('/studentId=:studentId', updateStudentById);

module.exports = studentRouter;