const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');  // Import uuid

const facultySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: uuidv4 // Auto-generate ID
    },
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    faclty_id: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false // Optional field for image URL
    }
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
