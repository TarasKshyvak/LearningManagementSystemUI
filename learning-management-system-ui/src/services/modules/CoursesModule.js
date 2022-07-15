import ApiService from "../ApiService";
import { routes } from "../../components/Routes";

export default class CoursesModule {

    static async getAllCourses()
     {
        let allCourses = ApiService.get(routes.courses);

        return allCourses;
     }

     static async CreateCours(body)
     {
        let cours = await ApiService.post(routes.courses, body);

        return await cours;
     }

     static async getCoursbyID(id)
     {
        let Cours = await ApiService.get(`${routes.courses}/${id}`);

        return await Cours;
     }

     static async putCoursbyID(id, body)
     {
        let Cours = await ApiService.put(`${routes.courses}/${id}`, body);

        return await Cours;
     }

     static async deleteCoursbyID(id)
     {
        let Cours = await ApiService.delete(`${routes.courses}/${id}`);

        return await Cours; 
     }
}