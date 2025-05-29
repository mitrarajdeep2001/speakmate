import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const BASE_URL_PUBLIC = import.meta.env.VITE_BACKEND_URL_PUBLIC

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
