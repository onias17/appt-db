// ---------- DATABASE
const { reset } = require('nodemon');
const db = require('../models');

// Current Path '/appointments'

// ---------- GET index
const index = (req, res) => {
  // db.Appointment.find({}, (err, allAppointments) => {
  //   if(err) return console.log(err);
    
  //   res.render('appointments/index', {appointments: allAppointments});
  // });

  db.Appointment.find({})
    .then((foundAppointments) => {
      res.json({ appointments: foundAppointments })
    })
    .catch((err) => {
      console.log('error in appointments.index', err)
      res.json({ Error: 'unable to get your data'})
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
  // db.Appointment.create(req.body, (err, newAppointment) => {
  //   if(err) return console.log(err);
  //   console.log('new:', newAppointment)
  //   res.redirect('/appointments');

  db.Appointment.findById(req.body)
    .then((savedAppointment) => {
      res.json({ apppointment: savedAppointment })
    })
    .catch((err) => {
      console.log('error in the appointment.create:', err);
      res.json({ Error: 'unable to get data' })
    });
};

// ---------- UPDATE edit appointment
const update = (req,res) => {
  db.Appointment.findByIdAndDelete(req.params.id)
    .then((updatedAppointment) => {
      res.json({ appointment: updatedAppointment })
    })
    .catch((err) => {
      console.log('error in the appointment.update:', err);
      res.json({ Error: 'unable to get data' })
    });
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
