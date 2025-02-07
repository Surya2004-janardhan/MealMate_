const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Item = require("../models/Item");

// 🛒 Checkout & Create Order
exports.createOrder = async (req, res) => {
  const userId = req.user.id; // Get user ID from authentication
  try {
    // Get cart items
    const cart = await Cart.findOne({ user: userId }).populate("items.item");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty!" });
    }

    // Calculate total amount
    let totalAmount = 0;
    cart.items.forEach((item) => {
      totalAmount += item.quantity * item.item.price; // item.price comes from Item model
    });

    // Create new order
    const order = new Order({
      user: userId,
      items: cart.items.map((item) => ({
        item: item.item._id,
        quantity: item.quantity,
        name: item.item.name,
        price: item.item.price,
      })),
      totalAmount,
      paymentMethod: "COD", // Or could be dynamically set later
    });

    // Save order
    await order.save();

    // Clear cart after checkout
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: "Order placed successfully!", order });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });
  }
};

// 🔍 Get Order by ID
exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate("items.item user");
    if (!order) {
      return res.status(404).json({ message: "Order not found!" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving order", error: error.message });
  }
};

// 🔍 Get All Orders for a User
exports.getUserOrders = async (req, res) => {
  const userId = req.user.id; // Get user ID from authentication
  try {
    const orders = await Order.find({ user: userId }).populate("items.item");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving orders", error: error.message });
  }
};

// 🛠 Update Order Status (Admin Only)
exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // Expected status values: "Pending", "Preparing", "Completed", "Cancelled"
  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found!" });
    }

    // Update order status
    order.status = status;
    await order.save();

    res.status(200).json({ message: "Order status updated successfully!", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order status", error: error.message });
  }
};
