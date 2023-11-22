import axios from "axios";

const axiosWithConfig = axios.create();

let bearerToken = "";

export const setAxiosConfig = (token: string) => {
  bearerToken = token;
  return bearerToken;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  const token = localStorage.getItem("token");
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.headers.Authorization = `Bearer ${token}`;
  return axiosConfig;
});

export default axiosWithConfig;
