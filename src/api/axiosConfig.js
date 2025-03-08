import axios from "axios";
import {
  getCommonData,
  navigateToLogin,
  // navigateToTechSupport,
} from "../utils/helper";

const axiosInstance = axios.create({});

// export const baseURL = "http://154.210.160.132:9092/emrd2";
export const baseURL = "http://154.210.160.132:9092/emrd_dev"; // test server
// export const baseURL = "https://154.210.160.132:9091/emrd2";

axiosInstance.interceptors.request.use(
  async function (config) {
    const token = localStorage.getItem("token");
    const deviceToken = localStorage.getItem("deviceToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      // config.headers["Access-Control-Allow-Origin"] = true;
    }
    if (deviceToken) {
      config.headers["Device-Token"] = `${deviceToken}`;
    }
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    config.credentials = "same-origin";
    config.baseURL = baseURL;
    const commonData = getCommonData();
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      config.data = { ...config.data, ...commonData };
    } else if (config.method === "get") {
      config.params = { ...config.params };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const newToken =
      response.headers["authorization"] || response.result?.token;
    const newDeviceToken = response.headers["Device-Token"];
    if (newToken) {
      localStorage.setItem("token", newToken);
    }
    if (newDeviceToken) {
      localStorage.setItem("deviceToken", newDeviceToken);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        // navigateToLogin(error.response);
        window.location.href = "#/login";
        return Promise.reject("Unauthorized");
      }
      return Promise.reject(error?.response?.data?.message);
    } else {
      return Promise.reject(
        error?.message ||
          "Network Error: Please check your internet connection."
      );
    }
  }
);

export default axiosInstance;
