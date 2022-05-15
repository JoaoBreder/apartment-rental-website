const express = require('express');
const routes = require('./api/routes/index');


const server = express();
const PORT = 5000;

server.use('/api', routes);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});