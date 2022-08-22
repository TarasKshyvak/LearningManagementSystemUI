import { routes } from '../components/Routes';
import ApiService from "./ApiService";

export default class TestingService {

    static async getQuestionsByTestId(testId) {
        const response = ApiService.get(routes.testing + `/Questions/${testId}`);
        return response;
    }

    static async passTest(studentAnswers) {
        const studentAnswersModel = JSON.stringify(studentAnswers, null, 2);
        console.log('studentAnswersModel', studentAnswersModel)
        const response = await ApiService.post(routes.testing + "/Tests/Passing", studentAnswersModel);
        return response;
    }
}
