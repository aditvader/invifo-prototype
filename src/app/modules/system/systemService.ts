import http from "../../../setup/httpService";
import { apiUrl } from "../../../config.json";
const apiEndpoint = apiUrl + "/system/";

export function getAppSystem() {
  return http.get(apiEndpoint);
}

export function getAsideAppSystem() {
  return http.get(apiEndpoint + "aside");
}

export function getAppList() {
  return http.get(apiEndpoint + "app-list");
}
