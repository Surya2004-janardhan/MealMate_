const express = require('express');
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/reviews', authMiddleware, reviewController.addReview);
router.get('/items/:itemId/reviews', reviewController.getReviews);

module.exports = router;