const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// CRUD Routes for Pet
router.post('/', petController.createPet);
router.get('/', petController.getPets);
router.get('/:petId', petController.getPetById); // Changed ':id' to ':petId'
router.put('/:petId', petController.updatePet); // Changed ':id' to ':petId'
router.delete('/:petId', petController.deletePet); // Changed ':id' to ':petId'

module.exports = router;
