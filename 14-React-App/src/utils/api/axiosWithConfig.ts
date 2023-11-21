import axios from "axios";

const axiosWithConfig = axios.create();

let bearerToken = "";

export const setAxiosConfig = (token: string) => {
  bearerToken = token;
  return bearerToken;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  const token = localStorage.getItem("token");
  axiosConfig.headers.Authorization = `Bearer ${token}`;
  return axiosConfig;
});

export default axiosWithConfig;
