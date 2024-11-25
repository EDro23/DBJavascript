const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  ownerId: {
    type: String,
    required: true,
    unique: true // Ensure ownerId is unique
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  pets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet'
  }]
});


module.exports = mongoose.model('Owner', ownerSchema);

