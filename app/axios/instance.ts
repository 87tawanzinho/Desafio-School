import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-desafio-school.vercel.app/",
});

export default instance;
