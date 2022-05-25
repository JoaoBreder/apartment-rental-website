const Database = require('../../database/config');
const schema = require('../schemas/schemas');


exports.create = async (req, res) => {
    const json = schema.validate(req.body, schema.cliente.create);

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
            nome,
            email,
            cpf,
            telefone_1,
            telefone_2
        } = req.body;

        await db.run(`
        INSERT INTO CLIENTE
        VALUES (
            ${idCliente}, 
            "${nome}", 
            "${email}", 
            "${cpf}", 
            "${telefone_1}", 
            "${telefone_2}"
        )
        `);

        res.status(200).send({
            idCliente,
            code: 200,
            message: 'Cliente cadastrado com sucesso',
            recorded: true
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao cadastrar cliente',
            recorded: false,
            error: error.message
        });
    }
}

exports.update = async (req, res) => {
    const json = schema.validate(req.body, schema.cliente.update);

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
            nome,
            email,
            cpf,
            telefone_1,
            telefone_2
        } = req.body;

        await db.run(`
        UPDATE CLIENTE
        SET NOME = "${nome}",
            EMAIL = "${email}",
            CPF = "${cpf}",
            TELEFONE_1 = "${telefone_1}",
            TELEFONE_2 = "${telefone_2}"
        WHERE ID_CLIENTE = ${idCliente}
        `);

        res.status(200).send({
            code: 200,
            message: 'Cliente atualizado com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao atualizar cliente',
            error: error.message
        });
    }
}

exports.get = async (req, res) => {
    try {
        const db = await Database();
        const clientes = await db.all('SELECT * FROM CLIENTE');

        res.status(200).send({
            code: 200,
            clientes
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao buscar clientes',
            error: error.message
        });
    }
}