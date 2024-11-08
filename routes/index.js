// IMPORT REQUIRED MODULES
const express = require('express');
const contactRoute = require('./contacts');

// IMPORT CONTROLLER
const baseController = require('../controllers')


// SETUP EXPRESS ROUTER
const router = express.Router();

router.get('/', baseController.displayHome);

router.use('/contacts', contactRoute);


// EXPORT
module.exports = router;