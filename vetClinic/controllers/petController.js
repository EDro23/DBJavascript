const Pet = require('../models/pet');

// Create a new pet
const createPet = async (req, res) => {
  try {
    const pet = new Pet({
      ...req.body,
      petId: req.body.petId || `PET_${Date.now()}` // Generate custom petId if not provided
    });
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all pets
const getPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner'); // Populate owner details
    res.status(200).json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a pet by petId
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findOne({ petId: req.params.petId }).populate('owner'); // Query by petId
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a pet by petId
const updatePet = async (req, res) => {
  try {
    const pet = await Pet.updateOne(
      { petId: req.params.petId }, // Query by petId
      req.body, // Update data
      { new: true } // Return the updated document
    );
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a pet by petId
const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findOneAndDelete({ petId: req.params.petId }); // Query by petId
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    res.status(200).json({ message: 'Pet deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPet, getPets, getPetById, updatePet, deletePet };
