import ApiService from "./ApiService";
import { routes } from '../components/Routes';
export default class UserService {

    static async getUsers() {
        const response = ApiService.get(routes.users);
        return response;
    }

    static async post(user) {
        const response = await ApiService.post(routes.users, user);
        return response;
    }
}
