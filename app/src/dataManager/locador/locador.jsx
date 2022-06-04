import API from '../../service/api/api';
const api = new API();

class Locador {
    async getByLogin(login) {
        const route = '/locador/getByLogin';

        const response = await api.get({
            login
        }, route);

        return response;
    }
}

const locador = new Locador();
export default locador;