const express = require("express");
const { createOrder, getOrderById, getUserOrders, updateOrderStatus } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware"); // Middleware to protect routes

const router = express.Router();

// POST /api/orders/checkout - Place an order (user must be logged in)
router.post("/checkout", protect, createOrder);

// GET /api/orders/:id - Get order details by order ID
router.get("/:id", protect, getOrderById);

// GET /api/orders/user/:userId - Get all orders for a user
router.get("/user/:userId", protect, getUserOrders);

// PUT /api/orders/:id/status - Admin can update the order status
router.put("/:id/status", protect, updateOrderStatus);

module.exports = router;
