const Review = require('../models/Review');

exports.addReview = async (req, res) => {
    const { userId, itemId, rating, comment } = req.body;
    try {
        const review = new Review({ userId, itemId, rating, comment });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ itemId: req.params.itemId }).populate('userId');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};