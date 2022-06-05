import axios from './axios';


function makeRequest(params, route, method) {
    return new Promise(async (resolve, reject) => {
        let response;

        try {
            response = method === 'get' ?
                await axios[method](route, { params: { ...params } }) :
                await axios[method](route, { ...params });

            resolve(response.data);
        } catch (error) {
            resolve(error.response.data);
        }
    })
}

export default class API {
    async post(params, route) {
        const response = await makeRequest(params, route, 'post');
        return response;
    }

    async put(params, route) {
        const response = await makeRequest(params, route, 'put');
        return response;
    }

    async get(params, route) {
        const response = await makeRequest(params, route, 'get');
        return response;
    }
}