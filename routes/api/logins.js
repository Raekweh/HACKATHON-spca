const express = require('express');
const router = express.Router();

const Login = require('../../models/Login');

router.get('/test', (req, res) => res.send('Login route testing!'));

//Router retriveve clincs
router.get('/getLogins', (req, res) => {
    Login.find({})
        .then(login => res.json(login))
        .catch(err => res.status(404).json({ nologinfound: 'No User found' }));
});
module.exports = router;