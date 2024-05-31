import axios from "axios";

let url = "http://localhost:8081";
if (process.env.REACT_APP_ENV === "development") {
  url = "http://localhost:8081";
} else {
  url = "";
}

const axiosConfig = axios.create({
  baseURL: url,
  timeout: 10000,
});

axiosConfig.interceptors.request.use(
  config => {
    config.withCredentials = true;
    return config;
  },
  error => Promise.reject(error),
);

// 응답 인터셉터 추가
axiosConfig.interceptors.response.use(

  async response =>
    response
  ,

  async error =>
    Promise.reject(error),
);

export default axiosConfig;
