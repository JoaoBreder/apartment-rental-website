const Validator = require('jsonschema').Validator;

// Locador
exports.locador = {
    create: {
        'required': [
            'nome',
            'tipo',
            'login',
            'senha'
        ]
    },
    update: {
        'required': [
            'idLocador',
            'nome',
            'tipo',
            'login',
            'senha'
        ]
    }
}

// Cliente
exports.cliente = {
    create: {
        'required': [
            'nome',
            'email',
            'cpf',
            'telefone_1',
            'telefone_2'
        ]
    },
    update: {
        'required': [
            'idCliente',
            'nome',
            'email',
            'cpf',
            'telefone_1',
            'telefone_2'
        ]
    }
};

// Imóvel
exports.imovel = {
    create: {
        'required': [
            'logradouro',
            'numero',
            'bairro',
            'complemento',
            'descricao',
            'valorDiaria',
            'palavrasChave'
        ]
    },
    update: {
        'required': [
            'idImovel',
            'logradouro',
            'numero',
            'bairro',
            'complemento',
            'descricao',
            'valorDiaria',
            'disponibilidade',
            'palavrasChave'
        ]
    }
}

// Pedido
exports.pedido = {
    create: {
        'required': [
            'idCliente',
            'idLocador',
            'numero',
            'data',
            'inicioLocacao',
            'fimLocacao',
            'diasLocacao',
            'valorTotal',
            'taxaCancelamento'
        ]
    },
    update: {
        'required': [
            'idPedido',
            'idCliente',
            'idLocador',
            'numero',
            'data',
            'inicioLocacao',
            'fimLocacao',
            'diasLocacao',
            'valorTotal',
            'taxaCancelamento'
        ]
    }
}

exports.validate = function (instance, schema) {
    const validator = new Validator();
    const response = validator.validate(instance, schema);
    return response;
}