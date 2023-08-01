import { REQUEST_TYPE } from "./../constant/config";
import { ACCESS_TOKEN } from "../constant/config";
import axios from "./axios";

const defaultHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: "Bearer " + ACCESS_TOKEN,
    // token: 'Bearer ' + accessToken,
  };
};

type TRequest = {
  url: string;
  method: REQUEST_TYPE;
  body?: any;
};

export const request = async ({ url, method, body }: TRequest) => {
  const headers = defaultHeaders();
  try {
    let response;
    switch (method) {
      case "GET":
        response = axios.get(url, { headers });
        break;
      case "POST":
        response = axios.post(url, body, { headers });
        break;
      case "PUT":
        response = axios.put(url, body, { headers });
        break;
      case "PATCH":
        response = axios.patch(url, body, { headers });
        break;
      case "DELETE":
        response = axios.delete(url, { headers });
        break;
      default:
        response = axios.get(url, { headers });
        break;
    }
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
