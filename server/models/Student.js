const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstName  : {
        type: String,
      
    },
    lastName  : {
        type: String,
      
    },
    subjects  : [String],
    dob  : {
        type: String,
        
    },
    address  : {
        type: String,
       
    },
   
    
},{timestamps : true})

module.exports = mongoose.model('Student', StudentSchema)