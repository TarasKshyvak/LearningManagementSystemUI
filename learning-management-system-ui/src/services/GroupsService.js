import axios from "axios";
import ApiService from "./ApiService";
import { routes } from '../components/Routes';

export default class GroupsService {
    static async getGroups() {
        const response = await ApiService.get(routes.groups);
        return response;
    }

    static async postGroup(data) {
        const response = await ApiService.post(routes.groups, data);
        return response;
    }

    static async removeGroup(id) {
        const response = await axios.delete(routes.apiUrl + routes.groups + '/' + id);
        return response;
    }

    static async updateGroup(id, model) {
        const response = await ApiService.put(routes.groups + '/' + id, model);
        return response;
    }
}