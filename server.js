// ---------- CONFIG
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = exspress()

// DOTENV 
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// ENGINE VIEW
app.set('view engine', 'ejs');

// ---------- CONTROLLERS
const ctrl = require('./controllers');

// ---------- MIDDLEWARE 
// BODY PARSER 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// METHOD OVERRIDE
app.use(methodOverride('_method'));

// LOGGING
app.use(morgan(':method :url'));

// ---------- ROUTES
// HOME
