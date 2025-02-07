const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Signup Route
router.post('/signup', registerUser);

// Login Route
router.post('/login', loginUser);

module.exports = router;
