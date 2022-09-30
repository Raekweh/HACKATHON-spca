const express = require('express');
const router = express.Router();

const Login = require('../../models/Login');

router.get('/test', (req, res) => res.send('Login route testing!'));

module.exports = router;