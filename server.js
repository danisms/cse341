/**************************************
********** REQUIRE STATEMENTS *********
**************************************/ 
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
// const swaggerAutogen = require('swagger-autogen')();
// const MongoClient = require('mongodb').MongoClient

// Modules
const mongodb = require('./models/db/connect-db');
const routes = require('./routes');


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


/*************************************
*********** ROUTES SETUPS ************
*************************************/
// Get Routes
app.use('/', routes)


/*************************************
****** LOCAL SERVER INFORMATION ******
*************************************/
const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

/*************************************
******** STARTING THE SERVER *********
**************************************
*********** DATABASE SETUP ***********
**************************************/
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, ()=> {
            console.log(`Connected to DB and Server running at http://${host}:${port}`);
        })
    }
});
