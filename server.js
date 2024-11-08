/**************************************
********** REQUIRE STATEMENTS *********
**************************************/ 
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient

// Modules


/**************************************
*********** EXPRESS SETUP *************
**************************************/
const app = express();
dotenv.config();  // using dotenv.config to load environment variables

/* *************************************
*************** MIDDLEWARE *************
***************************************/
// Middleware for parsing JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for handling CORS requests
app.use(cors());


/**************************************
*********** DATABASE SETUP ************
**************************************/


/*************************************
*********** ROUTES SETUPS ************
*************************************/
// Home Page
app.get("/", (req, res)=> {
    res.send("Welcome to Danism Web Services");
})


/*************************************
****** LOCAL SERVER INFORMATION ******
*************************************/
const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

/*************************************
*********** STARTING THE SERVER ******
*************************************/
app.listen(port, ()=> {
    console.log(`Server running at http://${host}:${port}`);
})
