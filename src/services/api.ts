import axios from "axios";

const api = axios.create({
  baseURL: "https://wewonder-backend.herokuapp.com/",
});

export default api;
