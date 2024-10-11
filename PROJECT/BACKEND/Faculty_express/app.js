const express = require('express');
const mongoose = require('mongoose');
const faculty = require('./mogo');
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


app.get('/faculty', async (req, res) => {
    try {
        const facultys = await faculty.find();
        res.send(facultys);
    } catch (error) {
        res.status(500).send({ message: 'Server error' });
    }
});


app.get('/faculty/:id', async (req, res) => {
    try {
        const facultyData = await faculty.findOne({ faclty_id: req.params.id });
        if (!facultyData) {
            return res.status(404).send({ message: 'faculty not found' });
        }
        res.send(facultyData);
    } catch (error) {
        res.status(500).send({ message: 'Server error' });
    }
});


app.post('/faculty', async (req, res) => {
    try {
        const newFaculty = new faculty(req.body);
        const savedFaculty = await newFaculty.save();
        res.status(201).send(savedFaculty);
    } catch (error) {
        res.status(400).send({ message: 'Failed to add student', error });
    }
});


app.put('/faculty/:id', async (req, res) => {
    try {
        const facultyToUpdate = await faculty.findOne({ faclty_id: req.params.id });
        if (!facultyToUpdate) {
            return res.status(404).send({ message: 'faculty not found' });
        }


        facultyToUpdate.name = req.body.name || facultyToUpdate.name;
        facultyToUpdate.faclty_id = req.body.faclty_id || facultyToUpdate.faclty_id;
        facultyToUpdate.image = req.body.image || facultyToUpdate.image;

        const updatedfaculty = await facultyToUpdate.save();
        res.send(updatedfaculty);
    } catch (error) {
        res.status(400).send({ message: 'Failed to update faculty', error });
    }
});


app.delete('/faculty/:id', async (req, res) => {
    try {
        const deleteResult = await faculty.deleteOne({ faclty_id: req.params.id });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).send({ message: 'faculty not found' });
        }
        res.send({ message: 'faculty deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to delete faculty', error });
    }
});


app.listen(5000, () => {
    console.log('Server started on port 5000...');
});
