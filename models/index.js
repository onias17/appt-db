const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected succesfully...');
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

module.exports = {
  Appointment: require('./Appointment'),
};