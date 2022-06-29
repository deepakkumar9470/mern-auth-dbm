const mongoose = require('mongoose')
const {isEmail} = require('validator')

const AuthSchema = new mongoose.Schema({
    name  : {
        type: String,
        required: true
    },
    email  : {
        type: String,
        required: [true, 'Please enter email'],
        unique :true,
        lowercase : true,
        validate : [isEmail , 'Please enter a valid email']
    },
    password  : {
        type: String,
        required: [true, 'Please enter a valid password'],
        
    },
    students : [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
    ],
    
    roles  : {
        type: String,
        enum: ['teacher','student'],
        default: 'teacher'
    },
},{timestamps : true})






// // Class Schema

// const ClassSchema = new mongoose.Schema({
//     period  : {
//         type: Number,
       
//     },
   
//     time  : {
//         type: Number, default: (new Date()).getTime(),
       
//     },
    
    
// },{timestamps : true})



// // Subject Schema
// const SubjectSchema = new mongoose.Schema({
//     requirement  : {
//         type: Number,
      
//     },

//     capacity  : {
//         type: Number,
        
//     },
    
    
// },{timestamps : true})


module.exports = mongoose.model('Auth', AuthSchema)
// module.exports = mongoose.model('Class', ClassSchema)
// module.exports = mongoose.model('Subject', SubjectSchema)