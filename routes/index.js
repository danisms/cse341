// IMPORT REQUIRED MODULES
const express = require('express');
const contactRoute = require('./contacts');
const swaggerRoute = require('./swagger');

// IMPORT CONTROLLER
const baseController = require('../controllers')


// SETUP EXPRESS ROUTER
const router = express.Router();

router.get('/', baseController.displayHome);
router.use('/', swaggerRoute);
router.use('/contacts', contactRoute);
// router.use('/', baseController.displayHome);


// EXPORT
module.exports = router;