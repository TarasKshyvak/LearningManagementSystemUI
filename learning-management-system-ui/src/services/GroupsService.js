import axios from "axios";
import ApiService from "./ApiService";
import { routes } from '../components/Routes';

export default class GroupsService {
    static async getGroups() {
        const response = await axios.get("https://localhost:7285/api/Groups");
        return response;
    }

    static async postGroup(data) {
        const response = await ApiService.post(routes.groups, data);
        return response;
    }
}