// IMPORT REQUIRED MODULES
const contactModel = require('../models/contact');

// CREATE CONTACT CONTROLLER OBJECT HOLDER
const contactController = {};

contactController.getAllContacts = contactModel.getAllContacts;

contactController.getAContact = contactModel.getContactById;

// EXPORT CONTROLLER

module.exports = contactController;