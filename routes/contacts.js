// IMPORT REQUIRED MODULES
const express = require('express');

// IMPORT CONTROLLER
const contactController = require('../controllers/contact');


// SETUP EXPRESS ROUTER
const router = express.Router();

// Route to get all contacts
router.get('/', contactController.getAllContacts);

// Route to get contact by id
router.get('/:id', contactController.getAContact)

// Route to create a contact
router.post('/', contactController.createNewContact);

// Route to update a contact
router.put('/:id', contactController.updateAContact);

// Route to delete a contact
router.delete('/:id', contactController.deleteAContact);


// EXPORT
module.exports = router;