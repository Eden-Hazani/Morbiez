const express = require('express')
const reservations = require('../reservations.json');
const server = express();

server.use(express.json());

server.get('/api/reservations', (request, response) => {
    response.json(reservations)
})

server.listen(3000, () => console.log("Listining on http://localhost:3000"))