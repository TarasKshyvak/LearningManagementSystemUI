import axios from 'axios';
import {routes} from '../components/Routes';

const response = {
    data: null,
    errors: null
}

export default class ApiService {

    static async get(uri) {
        const url = `${routes.apiUrl}${uri}`;
        const response = await axios.get(url);
        return response;
    }

    static async post(uri, body) {
        const response = {
            data: null,
            errors: null
        }
        await axios.post(routes.apiUrl + uri, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => response.data = res.data)
            .catch(e => response.errors = e.response.data.errors);

        return response;
    }

    static async put(uri) {
        const url = `${routes.apiUrl}${uri}`;
        const response = await axios.put(url);

        return response;
    }

    static async delete(uri) {
        const url = `${routes.apiUrl}${uri}`;
        const response = await axios.delete(url)
            .then(res => this.response.data = res.data)
            .catch(e => this.response.errors = e.response.data.errors);
        return response;
    }
}