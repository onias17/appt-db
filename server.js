// ---------- CONFIG
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express()
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: 'http://localhost:4001'
}


// ---------- MIDDLEWARE 
// CORS
app.use(express.json());
app.use(cors(corsOptions));

// ---------- ROUTES

// API
app.use('/api/v1/appointments', routes.appointments);

// ---------- LISTENER
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));