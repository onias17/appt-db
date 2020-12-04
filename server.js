// ---------- CONFIG
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express()
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const corsOptions = {
  origin: 'http://localhost:3000'
}



// ---------- MIDDLEWARE 
// CORS
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));


// ---------- ROUTES

// API
app.use('/api/v1/appointments', routes.appointments);

// ---------- LISTENER
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));