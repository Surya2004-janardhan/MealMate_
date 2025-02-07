const mongoose = require('mongoose');
const fs = require('fs');
const Canteen = require('./models/Canteen'); // Your Canteen model
require('dotenv').config({ path: '../.env' });  // Explicitly specify the path to .env


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Read the JSON file
fs.readFile('./data/canteenData.json', 'utf-8', async (err, data) => {
  if (err) {
    console.log('Error reading the file:', err);
    return;
  }
  
  // Parse the data and insert into MongoDB
  try {
    const canteens = JSON.parse(data);
    await Canteen.insertMany(canteens);
    console.log('Data successfully inserted!');
    mongoose.disconnect(); // Disconnect after operation
  } catch (error) {
    console.error('Error inserting data:', error);
  }
});
