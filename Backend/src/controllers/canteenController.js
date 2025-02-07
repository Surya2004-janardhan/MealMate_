const Canteen = require('../models/Canteen');
const Item = require('../models/Item');

// Get all canteens
exports.getAllCanteens = async (req, res) => {
  try {
    const canteens = await Canteen.find();
    res.status(200).json(canteens);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving canteens', error: error.message });
  }
};

// Get a single canteen by ID
exports.getCanteenById = async (req, res) => {
  try {
    const canteen = await Canteen.findById(req.params.id).populate('items');
    if (!canteen) return res.status(404).json({ message: 'Canteen not found' });
    
    res.status(200).json(canteen);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving canteen', error: error.message });
  }
};
