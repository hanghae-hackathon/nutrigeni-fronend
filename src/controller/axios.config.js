import axios from "axios";

let url = "http://192.168.0.193:8081";
if (process.env.REACT_APP_ENV !== "development") {
  url = "http://192.168.0.193:8081";
}

const axiosConfig = axios.create({
  baseURL: url,
  timeout: 10000,
});

axiosConfig.interceptors.request.use(
  (config) => {
    config.withCredentials = false;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosConfig.interceptors.response.use(
  async (response) => response,
  async (error) => Promise.reject(error),
);

export default axiosConfig;
