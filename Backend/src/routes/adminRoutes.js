const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

// Protect all admin routes with authMiddleware and adminMiddleware
router.use(authMiddleware.protect); // Ensure user is authenticated
router.use(adminMiddleware); // Ensure user is an admin

// Admin-only routes
router.get('/users', adminController.getAllUsers);
router.post('/menu', adminController.addMenuItem);
router.put('/menu/:itemId', adminController.updateMenuItem);
router.delete('/menu/:itemId', adminController.deleteMenuItem);

module.exports = router;