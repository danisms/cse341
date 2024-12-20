// REQUIRED MODULES
const dotenv = require('dotenv');

// CONFIGURE
dotenv.config();

// BUILD FUNCTIONS
async function displayHome (req, res) {
    //#swagger.tags=['Home']
    const homeData = {
        welcomeMsg: 'Welcome to Danism Web Services',
        apiDocs: `${process.env.SERVER_HOST}/${process.env.SERVER_PORT}/api-docs`
    }
    res.send(homeData);
}


module.exports = { displayHome };