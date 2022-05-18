const Validator = require('jsonschema').Validator;

// Customer
exports.customer = {
    create: {
        'required': ['nome', 'email', 'cpf', 'telefone_1', 'telefone_2']
    },
    update: {
        'required': ['idCliente', 'nome', 'email', 'cpf', 'telefone_1', 'telefone_2']
    }
};

exports.validate = function (instance, schema) {
    const validator = new Validator();
    const response = validator.validate(instance, schema);
    return response;
}