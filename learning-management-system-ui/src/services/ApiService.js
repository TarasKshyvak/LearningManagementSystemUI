import axios from "axios";
import { routes } from "../components/Routes";

export default class ApiService {
  static async get(uri) {
    const url = `${routes.apiUrl}${uri}`;
    console.log(routes.apiUrl);
    const response = await axios.get(url);

    return response;
  }

  static async post(uri, body) {
    const url = `${routes.apiUrl}${uri}`;
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    debugger;
    return response;
  }

  static async put(uri, body) {
    const url = `${routes.apiUrl}${uri}`;
    const response = await axios.put(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }

  static async delete(uri) {
    const url = `${routes.apiUrl}${uri}`;
    const response = await axios.delete(url);

    return response;
  }
}
