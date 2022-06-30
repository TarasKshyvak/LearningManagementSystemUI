import axios from 'axios';

export default class UserService {
    static async getUsers() {
        const url = 'https://localhost:7285/api/users';
        const response = await axios.get(url);

        return response;
    }
}