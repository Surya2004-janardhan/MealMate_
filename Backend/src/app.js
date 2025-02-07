const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const cartRoutes = require("./routes/cartRoutes");
const canteenRoutes = require('./routes/canteenRoutes');
const itemRoutes = require('./routes/itemRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payment", paymentRoutes);

// require("dotenv").config();
// console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID); // Debugging

// const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profileRoutes');
const orderRoutes = require("./routes/orderRoutes");

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/cart", cartRoutes);

// Routes
app.use('/api/auth', authRoutes);
// es

app.use('/api/canteens', canteenRoutes);
app.use('/api/items', itemRoutes);
// const canteenRoutes = require('./routes/canteenRoute');
// app.use('/api', canteenRoutes);
module.exports = app;
