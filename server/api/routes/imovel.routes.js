const express = require('express');
const imovel = require('../funcs/imovel');
const imovelRouter = express.Router();


imovelRouter.post('/', async (req, res) => {
    imovel.create(req, res);
});

imovelRouter.put('/', async (req, res) => {
    imovel.update(req, res);
});

imovelRouter.get('/', async (req, res) => {
    imovel.get(req, res);
});

module.exports = imovelRouter;