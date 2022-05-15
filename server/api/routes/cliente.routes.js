const express = require('express');
const cliente = require('../funcs/cliente');
const clienteRouter = express.Router();


clienteRouter.post('/', async (req, res) => {
    cliente.create(req, res);
});

clienteRouter.put('/', async (req, res) => {
    cliente.update(req, res);
});

clienteRouter.get('/', async (req, res) => {
    cliente.read(req, res);
});

module.exports = clienteRouter;