const express = require('express');
const router = express.Router();

// Load Book model
const Clinic = require('../../models/Clinic');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Clinics route testing!'));

//Router retriveve clincs
router.get('/getclinics', (req, res) => {
    Clinic.find()
        .then(clinic => res.json(clinic))
        .catch(err => res.status(404).json({ noclinicfound: 'No Clinic found' }));
});
module.exports = router;