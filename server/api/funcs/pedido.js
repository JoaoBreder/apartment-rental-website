const Database = require('../../database/config');
const schema = require('../schemas/schemas');


exports.create = async (req, res) => {
    const json = schema.validate(req.body, schema.pedido.create);

    if (!json.valid) {
        const arg = json.errors.map(err => {
            return err.argument;
        });

        res.status(400).send({
            code: 400,
            message: `Argumento faltando: ${arg}`,
            recorded: false
        });

        return;
    }

    try {
        const db = await Database();

        const {
            idCliente,
            idLocador,
            numero,
            data,
            inicioLocacao,
            fimLocacao,
            diasLocacao,
            valorTotal,
            taxaCancelamento
        } = req.body;

        await db.run(`
        INSERT INTO PEDIDO
        VALUES (
            ${idPedido},
            ${idCliente},
            ${idLocador},
            "${numero}", 
            "${data}", 
            "${inicioLocacao}", 
            "${fimLocacao}", 
            "${diasLocacao}",
            ${valorTotal},
            ${taxaCancelamento}
        )
        `);

        res.status(200).send({
            idPedido,
            code: 200,
            message: 'Pedido cadastrado com sucesso',
            recorded: true
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao cadastrar pedido',
            recorded: false,
            error: error.message
        });
    }
}

exports.update = async (req, res) => {
    const json = schema.validate(req.body, schema.pedido.update);

    if (!json.valid) {
        const arg = json.errors.map(err => {
            return err.argument;
        });

        res.status(400).send({
            code: 400,
            message: `Argumento faltando: ${arg}`,
            recorded: false
        });

        return;
    }

    try {
        const db = await Database();

        const {
            idPedido,
            idCliente,
            idLocador,
            numero,
            data,
            inicioLocacao,
            fimLocacao,
            diasLocacao,
            valorTotal,
            taxaCancelamento
        } = req.body;

        await db.run(`
        UPDATE CLIENTE
        SET ID_CLIENTE = ${idCliente},
            ID_LOCADOR = ${idLocador},
            NUMERO = "${numero}",
            DATA = "${data}",
            INICIO_LOCACAO = "${inicioLocacao}",
            FIM_LOCACAO = "${fimLocacao}",
            DIAS_LOCACAO = ${diasLocacao},
            VALOR_TOTAL = ${valorTotal},
            TAXA_CANCELAMENTO = ${taxaCancelamento}
        WHERE ID_PEDIDO = ${idPedido}
        `);

        res.status(200).send({
            code: 200,
            message: 'Pedido atualizado com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao atualizar pedido',
            error: error.message
        });
    }
}

exports.get = async (req, res) => {
    try {
        const db = await Database();
        const pedidos = await db.all('SELECT * FROM PEDIDO');

        res.status(200).send({
            code: 200,
            pedidos
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao buscar pedidos',
            error: error.message
        });
    }
}