const Database = require('../../database/config');

exports.create = async (req, res) => {
    res.status(200).send({
        code: 200,
        messagem: 'Sucesso!'
    });
}

exports.update = async (req, res) => {
    res.status(200).send({
        code: 200,
        messagem: 'Sucesso!',
    });
}

exports.read = async (req, res) => {
    res.status(200).send({
        code: 200,
        messagem: 'Sucesso!',
    });
}