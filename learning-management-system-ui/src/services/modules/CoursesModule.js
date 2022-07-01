import ApiService from "../ApiService";
import { routes } from "../../components/Routes";

export default class CoursesModule {

    static async getAllCourses()
     {
        let allCourses = ApiService.get(routes.courses);

        return allCourses;
     }
}