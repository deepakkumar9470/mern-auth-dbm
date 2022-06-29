const Student = require('../models/Student');

// Get all users
module.exports.getStudents = async (req, res) => {
    try{
        // finding something inside a model is time taking, so we need to add await
        const students = await Student.find();
        res.status(200).json(students);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
module.exports.addStudent = async (req, res) => {
    // retreive the info of user from frontend
    const student = req.body;


    const newStudent = new Student(student);
    try{
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}

// Get a user by id
module.exports.getStudentById = async (req, res) => {
    try{
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

module.exports.editStudent = async (req, res) => {
    let student = await Student.findById(req.params.id);
    student = req.body;

    const editStudent = new Student(student);
    try{
        await User.updateOne({_id: req.params.id}, editStudent);
        res.status(201).json(editStudent);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
module.exports.deleteStudent = async (req, res) => {
    try{
        await Student.deleteOne({_id: req.params.id});
        res.status(201).json("Student deleted Successfully");
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}