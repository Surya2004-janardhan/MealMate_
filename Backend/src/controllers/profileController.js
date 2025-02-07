const User = require('../models/User');
const Order = require('../models/Order');

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        const orders = await Order.find({ userId: req.userId }).populate('items.itemId');
        res.status(200).json({ user, orders });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserProfile = async (req, res) => {
    const { name, address, phone } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.userId,
            { name, address, phone },
            { new: true }
        ).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};