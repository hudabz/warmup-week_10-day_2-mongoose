'use strict'

//- import the 'mongoose' 

// The new schema, here
    //- Create new Schema called 'studentSchema'
    // * firstName - (String, required)
    // * lastName - (String, required)
    // * grade - (Number, required)
    // * age - (Number, Greater than or equal 18)
    // * city - (String)

    const mongoose = require("mongoose"); 

    const studentSchema = new mongoose.Schema({
        
            firstName: {
                 type: String, 
                 required: true
            }, 
            lastName: {
                type: String, 
                 required: true
            },
            grade: {
                type: Number, 
                required: true
            }, 
            age: {
                type: Number, 
                min: 18
            }, 
            city: {
                type: String
            }
         
    },{
       timestamps:true 
    })



// The model of the schema 

const Student = mongoose.model("Student", studentSchema) 


// Export the model 
module.exports = Student

