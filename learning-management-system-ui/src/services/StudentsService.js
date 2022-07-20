import ApiService from "./ApiService";
import { routes } from '../components/Routes';

export default class StudentsService {

    static async getStudentsWithoutGroups() {
        const response = ApiService.get(routes.students + '/withoutgroups');
        return response;
    }

    static async addStudentsToGroup(studentIds, groupId) {
        const response = ApiService.post(routes.management + `/AddStudents/ToGroup/${groupId}`, studentIds);
        return response;
    }
}