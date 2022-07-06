import axios from 'axios';
import {routes} from '../components/Routes';

export default class ApiService {

    static async get(uri) {
        console.log("Hi")
        const url = `${routes.apiUrl}${uri}`;
        console.log(routes.apiUrl);
        const response = await axios.get(url);
        console.log(response);

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
        }).then(res => response.data = res.data).catch(e => response.errors = e.response.data.errors);

        return response;
    }

    static async put(uri) {
        const url = `${routes.apiUrl}${uri}`;
        const response = await axios.put(url);

        return response;
    }

    static async delete(uri) {
        const url = `${routes.apiUrl}${uri}`;
        const response = await axios.delete(url);

        return response;
    }
}