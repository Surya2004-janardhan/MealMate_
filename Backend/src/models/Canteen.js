const mongoose = require('mongoose');

const CanteenSchema = new mongoose.Schema({
  canteenName: { type: String, required: true },
  location: { type: String, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] // Reference to food items
});

module.exports = mongoose.model('Canteen', CanteenSchema);
