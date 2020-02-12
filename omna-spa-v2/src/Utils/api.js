import axios from "axios";

const API = axios.create({
  baseURL: "https://cenit.io/app/omna-dev"
});

export default API;
