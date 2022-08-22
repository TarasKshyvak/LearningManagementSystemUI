import { routes } from '../components/Routes';
import ApiService from "./ApiService";

export default class TestingService {

    static async getQuestionsForPassing(testId) {
        const response = ApiService.get(routes.testing + `/Questions/Passing/${testId}`);
        return response;
    }

    static async passTest(studentAnswers) {
        const studentAnswersModel = JSON.stringify(studentAnswers, null, 2);
        const response = await ApiService.post(routes.testing + "/Tests/Passing", studentAnswersModel);
        return response;
    }
}
