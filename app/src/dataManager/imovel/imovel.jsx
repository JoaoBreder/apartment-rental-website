import API from '../../service/api/api';
const api = new API();


class Imovel {
    async create(imovel) {
        const route = '/imovel';

        const response = await api.post({
            ...imovel
        }, route);

        return response;
    }
}

const imovel = new Imovel();
export default imovel;