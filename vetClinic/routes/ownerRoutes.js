const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');

// CRUD Routes for Owner
router.post('/', ownerController.createOwner);
router.get('/', ownerController.getOwners);
router.get('/:ownerId', ownerController.getOwnerById);
router.put('/:ownerId', ownerController.updateOwner);
router.delete('/:ownerId', ownerController.deleteOwner);

module.exports = router;
