const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://ayesha:ayesha@employee.lumm3.mongodb.net/employee?retryWrites=true&w=majority&appName=employee')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const employeeRoutes = require('./routes/employee');
app.use('/api/employees', employeeRoutes);

// Serve static files (for image uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
