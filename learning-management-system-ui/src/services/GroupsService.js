import axios from "axios";
import ApiService from "./ApiService";
import { routes } from '../components/Routes';

export default class GroupsService {
    static async getGroups(pageNumber, pageSize) {
        const response = await axios.get(routes.apiUrl + routes.groups, {
            params: {
                PageNumber: pageNumber,
                PageSize: pageSize
            }
        });
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