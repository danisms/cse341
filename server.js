/**************************************
********** REQUIRE STATEMENTS *********
**************************************/ 
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
// const { logError, returnError, isOperationalError } = require('./errorHandler');

// const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema');

// const swaggerAutogen = require('swagger-autogen')();
// const MongoClient = require('mongodb').MongoClient

// Modules
const mongodb = require('./models/db/connect-db');
const routes = require('./routes');
// const { graphql } = require('graphql');


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
// This route is used as an endpoint to interact with Graphql,
// All queries go through this route.
// app.use('/graphql', graphqlHTTP({
//     // directing express-graphql to use this schema to map out the graph
//     schema,
//     // directing express-graph to use graphiql when goto '/graphql' address in the browser
//     // which provides an interface to make GraphQl queries
//     graphql:true
// }))

// Get Routes
app.use('/', routes)


/*************************************
*********** HANDLE ERROR *************
*************************************/
// handle operational errors
// app.use(logError)
// app.use(returnError)
// // handle other errors (programmer error)
// process.on('uncaughtException', error => {
//     logError(error)
//     // restart process/program if error is not opeartional error
//     if (!isOperationalError(error)) {
//         process.exit(1);
//     }
// })

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
