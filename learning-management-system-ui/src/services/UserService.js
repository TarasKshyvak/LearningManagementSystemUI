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

    static async delete(id){
        const response = await ApiService.delete(routes.users+'/'+id);
        return response;
    }

    static async put(id, model){
        const response = await ApiService.put(routes.users + '/'+id, model);
        return response;
    }
}
