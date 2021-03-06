const express = require('express');
const locador = require('../funcs/locador');
const locadorRouter = express.Router();


locadorRouter.post('/', async (req, res) => {
    locador.create(req, res);
});

locadorRouter.put('/', async (req, res) => {
    locador.update(req, res);
});

locadorRouter.get('/getByLogin', async (req, res) => {
    locador.getByLogin(req, res);
});

module.exports = locadorRouter;