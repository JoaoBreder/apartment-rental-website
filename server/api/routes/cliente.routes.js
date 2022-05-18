const express = require('express');
const cliente = require('../funcs/cliente');
const clienteRouter = express.Router();


clienteRouter.post('/', (req, res) => {
    cliente.create(req, res);
});

clienteRouter.put('/', (req, res) => {
    cliente.update(req, res);
});

clienteRouter.get('/', (req, res) => {
    cliente.getAllClients(req, res);
});

module.exports = clienteRouter;