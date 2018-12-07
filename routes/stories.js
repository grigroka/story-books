'use strict';

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../helpers/auth');

// Stories Index
router.get('/', (req, res) => {
  res.render('stories/index');
});

// Add Story Form
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('stories/add');
});

// Process Add Story
router.post('/', (req, res) => {
  res.send('sent');
});

module.exports = router;
