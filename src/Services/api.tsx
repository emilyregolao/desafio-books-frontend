import axios from "axios";
import { useUser } from "../Providers/UserProvider";

const token = localStorage.getItem("Books@token");

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
