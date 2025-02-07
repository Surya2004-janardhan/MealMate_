const express = require('express');
const profileController = require('../controllers/profileController'); // Ensure this path is correct
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Use the controller functions as callbacks
router.get('/profile', authMiddleware.protect, profileController.getUserProfile);
router.put('/profile', authMiddleware.protect, profileController.updateUserProfile);

module.exports = router;