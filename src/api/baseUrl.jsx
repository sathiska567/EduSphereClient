import axios from "axios";


// const baseURL = process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_BASE_URL : process.env.REACT_APP_SERVER_BASE_URL;


const baseURL = "http://13.60.31.119:4000";

const api = axios.create({
  baseURL: `${baseURL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
