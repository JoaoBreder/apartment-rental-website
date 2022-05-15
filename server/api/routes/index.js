const express = require('express');

const locador = require('./locador.routes');
const cliente = require('./cliente.routes');
const imovel = require('./imovel.routes');
const pedido = require('./pedido.routes');


const router = express.Router();

router.use('/locador', locador);
router.use('/cliente', cliente);
router.use('/imovel', imovel);
router.use('/pedido', pedido);

module.exports = router;