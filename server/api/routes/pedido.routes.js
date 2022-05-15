const express = require('express');
const pedido = require('../funcs/pedido');
const pedidoRouter = express.Router();


pedidoRouter.post('/', async (req, res) => {
    pedido.create(req, res);
});

pedidoRouter.put('/', async (req, res) => {
    pedido.update(req, res);
});

pedidoRouter.get('/', async (req, res) => {
    pedido.read(req, res);
});

module.exports = pedidoRouter;