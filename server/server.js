const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser');


const server = express();
const PORT = 5000;

server.use(require('cors')({ origin: true }));

server.use('/api', bodyParser.json(), routes);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});