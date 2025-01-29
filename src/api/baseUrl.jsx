import axios from "axios";

const baseURL =
  import.meta.env.REACT_NODE_ENV === "development"
    ? import.meta.env.REACT_LOCAL_BASE_URL
    : import.meta.env.REACT_SERVER_BASE_URL;

const api = axios.create({
  baseURL: `${baseURL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Add request interceptor to handle token updates
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
