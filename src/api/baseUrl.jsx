import axios from "axios";


const baseURL =
  import.meta.env.REACT_APP_NODE_ENV === "development"
    ? import.meta.env.REACT_APP_LOCAL_BASE_URL
    : import.meta.env.REACT_APP_SERVER_BASE_URL;

const api = axios.create({
  baseURL: `${baseURL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
