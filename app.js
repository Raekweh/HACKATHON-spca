const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const clinics = require('./routes/api/clinics');
const logins = require('./routes/api/logins');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//HOme page router
app.get('/', (req, res) => res.send('Hello world!'));

// use clinic Routes
app.use('/api/clinics', clinics);

// use logins Routes
app.use('/api/logins', logins);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));