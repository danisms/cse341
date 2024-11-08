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

// EXPORT

module.exports = router;