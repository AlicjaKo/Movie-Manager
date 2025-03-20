const express = require('express');
const { login, register } = require('../controllers/authController'); // Import login logic
const router = express.Router();

// Login route
router.post('/login', login);
router.post('/register', register);

module.exports = router;