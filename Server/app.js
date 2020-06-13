global.config = require('./config.json');
const express = require('express');
const cors = require('cors');
const morbiezController = require('./controllers/morbiez-controller');

const server = express();
server.use(cors())
server.use(express.json());
server.use(express.static(__dirname)); // for getting the images
server.use('/api/morbiez', morbiezController)

server.listen(3000, () => console.log('listning to server!'))