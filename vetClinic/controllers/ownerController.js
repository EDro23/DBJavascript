const Owner = require('../models/owner');

// Create a new owner
const createOwner = async (req, res) => {
  try {
    const owner = new Owner({
      ...req.body,
      ownerId: `OWNER_${Date.now()}` // Generate a unique custom ownerId
    });
    await owner.save();
    res.status(201).json(owner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all owners
const getOwners = async (req, res) => {
  try {
    const owners = await Owner.find().populate('pets'); // Populate pets owned by this owner
    res.status(200).json(owners);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get an owner by ID
const getOwnerById = async (req, res) => {
  try {
    console.log(req.params.ownerId)
    const owner = await Owner.findOne({ ownerId: req.params.ownerId }).populate('pets'); 
    console.log(owner)// Query by ownerId
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json(owner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Update an owner
const updateOwner = async (req, res) => {
  try {
    const owner = await Owner.updateOne({ ownerId: req.params.ownerId }, req.body, { new: true });
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json(owner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an owner
const deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.findOneAndDelete(req.params.ownerId);
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json({ message: 'Owner deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createOwner, getOwners, getOwnerById, updateOwner, deleteOwner };
