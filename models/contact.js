// IMPORT REQUIRED MODULES
const mongodb = require('./db/connect-db');
const ObjectId = require('mongodb').ObjectId

// INITIALIZE contactModel object
const contactModel = {}

// Get all contacts
contactModel.getAllContacts = async function(req, res) {
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
contactModel.getContactById = async function(req, res) {
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

// EXPORT

module.exports = contactModel;