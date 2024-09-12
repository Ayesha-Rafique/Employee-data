const express = require('express');
const multer = require('multer');
const path = require('path');
const Employee = require('../models/Employee');

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Route to add employee
router.post('/', upload.single('workProfile'), async (req, res) => {
  try {
    const { name, email, joiningDate, designation, contact } = req.body;
    const workProfile = req.file ? req.file.filename : '';

    const newEmployee = new Employee({
      name,
      email,
      joiningDate,
      designation,
      contact,
      workProfile
    });

    await newEmployee.save();
    res.status(201).send(newEmployee);
  } catch (err) {
    console.error('Error adding employee:', err); // Log the error to the console
    res.status(500).send('Internal Server Error'); // Send a generic error message
  }
});

// Route to get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).send(employees);
  } catch (err) {
    console.error('Error fetching employees:', err); // Log the error to the console
    res.status(500).send('Internal Server Error'); // Send a generic error message
  }
});

module.exports = router;
