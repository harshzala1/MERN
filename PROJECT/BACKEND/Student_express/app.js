const express = require('express');
const mongoose = require('mongoose');
const student = require('./mogo');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://omthoriya:om4357thoriya@cluster0.8yooh.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log('Connection failed!', err));


app.get('/student', async (req, res) => {
    try {
        const students = await student.find();
        res.send(students);
    } catch (error) {
        res.status(500).send({ message: 'Server error' });
    }
});


app.get('/student/:id', async (req, res) => {
    try {
        const studentData = await student.findOne({ rollno: req.params.id });
        if (!studentData) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.send(studentData);
    } catch (error) {
        res.status(500).send({ message: 'Server error' });
    }
});


app.post('/student', async (req, res) => {
    try {
        const newStudent = new student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).send(savedStudent);
    } catch (error) {
        res.status(400).send({ message: 'Failed to add student', error });
    }
});


app.put('/student/:id', async (req, res) => {
    try {
        const studentToUpdate = await student.findOne({ rollno: req.params.id });
        if (!studentToUpdate) {
            return res.status(404).send({ message: 'Student not found' });
        }


        studentToUpdate.name = req.body.name || studentToUpdate.name;
        studentToUpdate.rollno = req.body.rollno || studentToUpdate.rollno;
        studentToUpdate.image = req.body.image || studentToUpdate.image;

        const updatedStudent = await studentToUpdate.save();
        res.send(updatedStudent);
    } catch (error) {
        res.status(400).send({ message: 'Failed to update student', error });
    }
});


app.delete('/student/:id', async (req, res) => {
    try {
        const deleteResult = await student.deleteOne({ rollno: req.params.id });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.send({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to delete student', error });
    }
});


app.listen(4500, () => {
    console.log('Server started on port 4500...');
});
