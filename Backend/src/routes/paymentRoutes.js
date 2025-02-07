const express = require("express");
const { createOrder,verifyPayment } = require("../controllers/paymentController");

const router = express.Router();

router.post("/create-order", createOrder);


// Route to verify payment signature
router.post("/verify", verifyPayment);

module.exports = router;
