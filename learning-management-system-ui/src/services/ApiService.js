import axios from 'axios';
import { routes } from '../components/Routes';

export default class ApiService {

    static async get(uri) {
        console.log("Hi")
        const url = `${routes.apiUrl}${uri}`;
        console.log(routes.apiUrl);
        const response = await axios.get(url);
        console.log(response);

        return response;
    }

    static async post(uri, resource) {
        const url = `${routes.apiUrl}${uri}`;
        const response = await axios.post(url);

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