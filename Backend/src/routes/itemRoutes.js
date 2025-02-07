const express = require('express');
const router = express.Router();
const { getAllItems, getItemById, searchItems } = require('../controllers/itemController');

router.get('/', getAllItems); // Get all items
router.get('/:id', getItemById);// Get items by canteen ID
router.get('/search', searchItems); // Search items by name

module.exports = router;
