const User = require('../models/User');
const Item = require('../models/Item');
const Order = require('../models/Order');

// Get all users (for admin)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude passwords
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add a new menu item (for admin)
exports.addMenuItem = async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    const item = new Item({ name, description, price, category });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a menu item (for admin)
exports.updateMenuItem = async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    const item = await Item.findByIdAndUpdate(
      req.params.itemId,
      { name, description, price, category },
      { new: true } // Return the updated item
    );

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a menu item (for admin)
exports.deleteMenuItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all orders (for admin)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId', 'name email') // Populate user details
      .populate('items.itemId', 'name price'); // Populate item details

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update order status (for admin)
exports.updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status },
      { new: true } // Return the updated order
    );

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};