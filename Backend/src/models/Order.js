const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referencing the User model
      required: true,
    },
    items: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item", // Referencing the Item model
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        name: {
          type: String, // Item name
          required: true,
        },
        price: {
          type: Number, // Item price
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true, // Total price of the order
    },
    status: {
      type: String,
      enum: ["Pending", "Preparing", "Completed", "Cancelled"],
      default: "Pending", // Default status is 'Pending'
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "Online"],
      default: "COD", // Default is Cash on Delivery
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
