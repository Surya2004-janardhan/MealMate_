const Razorpay = require("razorpay");
// console.log(process.env.RAZORPAY_KEY_ID,
// )
require("dotenv").config({ path: "../.env" });

// require('dotenv').config({ path: 'C:\Users\chint\OneDrive\Desktop\Ultimate\Backend\.env' });  // Explicitly specify the path to .env

console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID); // Debugging

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "", // Avoid undefined errors
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  throw new Error("Missing Razorpay API keys. Check your .env file.");
}


// Create an order
exports.createOrder = async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const options = {
      amount: amount * 100, // Amount in paisa (1 INR = 100 paisa)
      currency: currency || "INR",
      receipt: "order_rcptid_" + new Date().getTime(),
      payment_capture: 1, // Auto-capture payment
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
};

// Verify payment
exports.verifyPayment = async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      const body = razorpay_order_id + "|" + razorpay_payment_id;
      
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(body)
        .digest("hex");
  
      if (expectedSignature === razorpay_signature) {
        res.status(200).json({ message: "Payment verified successfully" });
      } else {
        res.status(400).json({ message: "Invalid payment signature" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error verifying payment", error: error.message });
    }
  };
