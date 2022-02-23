import http from "../../../setup/httpService";
import { apiUrl } from "../../../config.json";

const apiEndpoint = apiUrl + "/auth/";

export async function login(username: string, password: string) {
  const response = await http.post(apiEndpoint + "login", {
    username,
    password
  });
  return response.data;
}