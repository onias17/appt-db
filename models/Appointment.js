const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  buildingType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: 250,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  user: {
    userId: String,
  }
}, {timestamps: true});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;