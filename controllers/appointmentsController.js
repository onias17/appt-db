// ---------- DATABASE
const { reset } = require('nodemon');
const db = require('../models');

// Current Path '/appointments'

// ---------- GET index
const index = (req, res) => {
  db.Appointment.find({})
    .then((foundAppointments) => {
      res.json({ appointments: foundAppointments })
    })
    .catch((err) => {
      console.log('error in appointments.index', err)
      res.json({ Error: 'unable to get your data' })
    });
};

// ---------- GET new
const show = (req, res) => {
  db.Appointment.findById(req.params.id)
    .then((foundAppointment) => {
      res.json({ appointment: foundAppointment })
    })
    .catch((err) => {
      console.log('error in appointment.show', err)
      res.json({ Error: 'unable to get your data' })
    });
};

// ---------- POST create appointment
const create = (req, res) => {
  console.log(req.body)
  db.Appointment.create(req.body)
    .then((savedAppointment) => {
      res.status(201).json({ apppointment: savedAppointment })
    })
    .catch((err) => {
      console.log('error in the appointment.create:', err);
      res.json({ Error: 'unable to get data' })
    });
};

// ---------- UPDATE edit appointment
const update = (req,res) => {
  db.Appointment.findByIdAndDelete(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedAppointment) => {
      if(err) console.log('Error in appointments.update:', err)

      res.json({ appointment: updatedAppointment });
    }
  );
};

// ---------- DELETE delete appointment
const destroy = (req, res) => {
  db.Appointment.findByIdAndDelete(req.params.id, (err, deletedAppointment) => {
    if(err) console.log('Error in appointment.destroy:', err)

    res.json({ appointment: deletedAppointment })
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
