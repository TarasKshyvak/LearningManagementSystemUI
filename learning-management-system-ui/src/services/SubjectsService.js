import ApiService from "./ApiService";
import { routes } from '../components/Routes';

export default class SubjectsService {

    static async getSubjects() {
        const response = await ApiService.get(routes.subjects);
        return response;
    }

    static async getById(id) {
        const response = await ApiService.get(routes.subjects + `/${id}`);
        return response;
    }
    
    static async getTopicsBySubjectId(id) {
        const response = await ApiService.get(routes.learning + routes.topics + `/${id}`);
        return response;
    }
}