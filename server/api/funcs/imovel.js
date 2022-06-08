const Database = require('../../database/config');
const schema = require('../schemas/schemas');


exports.create = async (req, res) => {
    const json = schema.validate(req.body, schema.imovel.create);

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
            logradouro,
            numero,
            bairro,
            complemento,
            descricao,
            valorDiaria,
            palavrasChave
        } = req.body;

        await db.run(`
        INSERT INTO 
        IMOVEL (
            LOGRADOURO,
            NUMERO,
            BAIRRO,
            COMPLEMENTO,
            DESCRICAO,
            VALOR_DIARIA,
            DISPONIBILIDADE
        )
        VALUES (
            "${logradouro}", 
            "${numero}", 
            "${bairro}", 
            "${complemento}", 
            "${descricao}",
            ${Number(valorDiaria)},
            "D"
        )
        `);

        console.log(palavrasChave);

        res.status(200).send({
            code: 200,
            message: 'Imóvel cadastrado com sucesso',
            recorded: true
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao cadastrar imóvel',
            recorded: false,
            error: error.message
        });
    }
}

exports.update = async (req, res) => {
    const json = schema.validate(req.body, schema.imovel.update);

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
            idImovel,
            logradouro,
            numero,
            bairro,
            complemento,
            descricao,
            valorDiaria,
            disponibilidade
        } = req.body;

        await db.run(`
        UPDATE IMOVEL
        SET LOGRADOURO = "${logradouro}",
            NUMERO = "${numero}",
            BAIRRO = "${bairro}",
            COMPLEMENTO = "${complemento}",
            DESCRICAO = "${descricao}",
            VALOR_DIARIA = ${valorDiaria},
            DISPONIBILIDADE = ${disponibilidade}
        WHERE ID_IMOVEL = ${idImovel}
        `);

        res.status(200).send({
            code: 200,
            message: 'Imóvel atualizado com sucesso'
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao atualizar imóvel',
            error: error.message
        });
    }
}

exports.get = async (req, res) => {
    try {
        const db = await Database();
        const imoveis = await db.all('SELECT * FROM IMOVEL');

        res.status(200).send({
            code: 200,
            imoveis
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Erro ao buscar imóveis',
            error: error.message
        });
    }
}