// ---------- CONFIG
const express = require('express');
const router = express.Router();

// ---------- DATABASE
const db = require('../models');

// Current Path '/appointments'

// ---------- GET index
router.get('/', (req, res) => {
  res.send('working');
});

// ---------- GET new
router.get('/new', (req, res) => {
  res.send('working');
});

module.exports = router;
