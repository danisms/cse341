const dotenv = require('dotenv');
const swaggerAutogen = require('swagger-autogen')();

dotenv.config();
const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;
const doc = {
    info: {
        title: 'Contact API',
        description: 'Contact API'
    },
    host: `${HOST}:${PORT}`,
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./server.js');
// });