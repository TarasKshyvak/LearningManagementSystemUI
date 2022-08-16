import ApiService from "../ApiService";
import { routes } from "../../components/Routes";


export default class TestModule {
  static async getAllCourses() {
    let allTests = ApiService.get(routes.testing + routes.tests);

    return allTests;
  }

  static async CreateTest(body) {
    let tests = await ApiService.post(routes.testing + routes.tests, body);

    return await tests;
  }

  static async getCoursbyID(id) {
    let tests = await ApiService.get(`${routes.courses}/${id}`);

    return await tests;
  }

  static async putCoursbyID(id, body) {
    let tests = await ApiService.put(`${routes.courses}/${id}`, body);

    return await tests;
  }

  static async deleteCoursbyID(id) {
    let Cours = await ApiService.delete(`${routes.courses}/${id}`);

    return await Cours;
  }
}
