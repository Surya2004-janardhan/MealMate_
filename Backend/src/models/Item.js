const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  available: Boolean,
  canteen : String
  // canteen: { type: mongoose.Schema.Types.ObjectId, ref: "Canteen" } // Store as ObjectId
});

module.exports = mongoose.model("Item", itemSchema);
