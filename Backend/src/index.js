const app = require('./app'); // Import Express app
// require('dotenv').config();

require('dotenv').config({ path: '../.env' });  // Explicitly specify the path to .env

// require("dotenv").config();
// console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID); // Debugging


// Load environment variables
// dotenv.config();
const connectDB = require('./config/db');
console.log(process.env.PORT);  // This should print the value of the PORT variable from your .env file

// Connect to MongoDB Atlas
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

