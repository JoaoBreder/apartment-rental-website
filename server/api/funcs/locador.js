const Database = require('../../database/config');
const schema = require('../schemas/schemas');


exports.create = async (req, res) => {
    const json = schema.validate(req.body, schema.locador.create);

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
            login,
            senha
        } = req.body;

        await db.run(`
        INSERT INTO 
        LOCADOR (
            NOME,
            LOGIN,
            SENHA
        )
        VALUES (
            "${nome}", 
            "${login}", 
            "${senha}"
        )
        `);

        res.status(200).send({
            code: 200,
            message: 'Locador cadastrado com sucesso',
            recorded: true
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao cadastrar locador',
            recorded: false,
            error: error.message
        });
    }
}

exports.update = async (req, res) => {
    const json = schema.validate(req.body, schema.locador.update);

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
            idLocador,
            nome,
            login,
            senha
        } = req.body;

        await db.run(`
        UPDATE LOCADOR
        SET NOME = "${nome}",
            LOGIN = "${login}",
            SENHA = "${senha}"
        WHERE ID_LOCADOR = ${idLocador}
        `);

        res.status(200).send({
            code: 200,
            message: 'Locador atualizado com sucesso',
            recorded: true
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao atualizar locador',
            error: error.message
        });
    }
}

exports.getByLogin = async (req, res) => {
    try {
        const db = await Database();
        const { login } = req.query;

        const locadores = await db.all(`
            SELECT * 
            FROM LOCADOR 
            WHERE LOGIN = "${login}"
        `);

        if (locadores.length === 0) {
            res.status(400).send({
                code: 400,
                mensagem: 'Não existe um locador cadastro com esse login'
            });

            return;
        }

        const locador = locadores[0];
        const { NOME, LOGIN, SENHA } = locador;

        res.status(200).send({
            result: {
                nome: NOME,
                login: LOGIN,
                senha: SENHA
            }
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao buscar locador',
            error: error.message
        });
    }
}