const Item = require('../models/Item');

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving items', error: error.message });
  }
};

const mongoose = require("mongoose");

exports.getItemById = async (req, res) => {
  try {
    const itemId = req.params.id; // Get item ID from request params

    // Validate if itemId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
      return res.status(400).json({ message: "Invalid item ID format" });
    }

    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving item", error: error.message });
  }
};


// Search items by name
exports.searchItems = async (req, res) => {
  try {
    const query = req.query.q;
    const items = await Item.find({ name: { $regex: query, $options: 'i' } }); // Case-insensitive search
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error searching items', error: error.message });
  }
};
