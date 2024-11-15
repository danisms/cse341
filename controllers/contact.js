// IMPORT REQUIRED MODULES
const mongodb = require('../models/db/connect-db');
const ObjectId = require('mongodb').ObjectId


// CREATE CONTACT CONTROLLER OBJECT HOLDER
const contactController = {};

// Get all contacts
contactController.getAllContacts = async function(req, res) {
    //#swagger.tags=['contact']
    try {
        const dataResult = await mongodb.getDb().db('project01').collection('contacts').find();
        dataResult.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts);
        })
    } catch (err) {
        console.error(err);
    }
}

// Get a contact by the contact id
contactController.getAContact = async function(req, res) {
    //#swagger.tags=['contact']
    const contactId = new ObjectId(req.params.id);
    try {
        const dataResult = await mongodb.getDb().db('project01').collection('contacts').find({ _id: contactId });
        dataResult.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts);
        })
    } catch (err) {
        console.error(err);
    }
}

// Create a contact
contactController.createNewContact = async function(req, res) {
    //#swagger.tags=['contact']
    // check if req.body is not empty
    if (!req.body) {
        return res.status(400).send({
          message: 'Contact details cannot be empty.',
        });
    }

    const contactObject = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        favoriteColor : req.body.favoriteColor,
        birthdate : req.body.birthdate
    };

    try {
        const response = await mongodb.getDb().db('project01').collection('contacts').insertOne(contactObject);
        console.log(response);  // for visualizing and testing purpose
        if (response.acknowledged) {
            const msg = "new contact added successfully";
            console.log(msg);  // testing purpose
            res.status(200).send({message: msg});
        } else {
            const msg = "fail to insert new contact";
            console.log(msg);  // for testing purpose
            res.status(500).send({message: msg});
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err) || "Error occured while inserting new contact";
    }
}

// Update a contact
contactController.updateAContact = async function(req, res) {
    //#swagger.tags=['contact']
    // check if req.body object is present
    if (!req.body) {
        return res.status(400).send({
          message: 'Contact details cannot be empty.\nPlease Include the required contact details to be updated!',
        });
    }

    const contactId = new ObjectId(req.params.id);
    const contactObject = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        favoriteColor : req.body.favoriteColor,
        birthdate : req.body.birthdate
    };

    try {
        const response = await mongodb.getDb().db('project01').collection('contacts').replaceOne({_id: contactId}, contactObject);
        console.log(response);  // for visualizing and testing purpose
        if (response.acknowledged && response.modifiedCount > 0) {
            const msg = `contact with contact-id: ${contactId}; has been updated successfully`;
            console.log(msg);  // testing purpose
            res.status(200).send({message: msg});
        } else {
            const msg = `fail to update contact with contact-id: ${contactId};\nPosible Error: Provided contact id not found: ${contactId}`;
            console.log(msg);  // for testing purpose
            res.status(404).send({message: msg});
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err) || "Error occured while updating contact";
    }
}

// Delete a contact
contactController.deleteAContact = async function(req, res) {
    //#swagger.tags=['contact']
    const contactId = new ObjectId(req.params.id);
    console.log(`contactId: ${contactId}`);  // for testing purpose

    try {
        const response = await mongodb.getDb().db('project01').collection('contacts').deleteOne({_id: contactId});
        console.log(response);  // for visualizing and testing purpose
        if (response.acknowledged && response.deletedCount > 0) {
            const msg = `contact with contact-id: ${contactId}; has been deleted successfully`;
            console.log(msg);  // testing purpose
            res.status(200).send({message: msg});
        } else {
            const msg = `fail to delete contact with contact-id: ${contactId};\nPosible Error: Provided contact id not found: ${contactId}`;
            console.log(msg);  // for testing purpose
            res.status(404).send({message: msg});
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err) || "Error occured while deleting contact";
    }
}

// EXPORT CONTROLLER

module.exports = contactController;