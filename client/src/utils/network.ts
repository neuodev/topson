import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
});
