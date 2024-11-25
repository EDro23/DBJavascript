const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  petId: {
    type: String,
    required: true,
    unique: true // Ensure petId is unique
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  breed: {
    type: String
  },
  age: {
    type: Number
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: true
  },
  medicalHistory: {
    type: [String]
  }
});


module.exports = mongoose.model('Pet', petSchema);
