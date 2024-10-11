// models/student.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');  // Import uuid

const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: uuidv4 // Auto-generate ID
    },
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false // Optional field for image URL
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
