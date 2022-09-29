const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../../models/Clinic');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Clinics route testing!'));

module.exports = router;