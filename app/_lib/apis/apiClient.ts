import axios from "axios";

axios.defaults.withCredentials = true;

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
if (!baseURL) {
  throw new Error("BASE_URL IS MISSING");
}

const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

export default apiClient;
