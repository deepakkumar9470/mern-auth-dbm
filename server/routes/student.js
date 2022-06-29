const express = require('express');

const router = express.Router();

const studentControllers = require('../controllers/studentControllers');


// @/api/student/add

router.get('/', studentControllers.getStudents);
router.post('/add', studentControllers.addStudent);
router.get('/:id', studentControllers.getStudentById);
router.put('/:id', studentControllers.editStudent);
router.delete('/:id', studentControllers.deleteStudent);

module.exports =  router;