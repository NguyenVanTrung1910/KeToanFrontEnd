import axios from "axios";

const API_URL = "http://localhost:5000/api";

const Api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Cho phép gửi Cookie
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
