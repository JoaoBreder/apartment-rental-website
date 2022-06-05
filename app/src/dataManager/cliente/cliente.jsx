import API from '../../service/api/api';
const api = new API();

class Cliente {
    async create(cliente) {
        const route = '/cliente';

        const response = await api.post({
            ...cliente
        }, route);

        return response;
    }
}

const cliente = new Cliente();
export default cliente;