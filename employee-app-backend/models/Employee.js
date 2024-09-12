const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  joiningDate: Date,
  designation: String,
  contact: String,
  workProfile: String
});

module.exports = mongoose.model('Employee', employeeSchema);
