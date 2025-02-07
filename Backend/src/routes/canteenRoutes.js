const express = require('express');
const router = express.Router();
const { getAllCanteens, getCanteenById } = require('../controllers/canteenController');

router.get('/', getAllCanteens); // Get all canteens
router.get('/:id', getCanteenById); // Get canteen by ID

module.exports = router;
