import axios from "axios";

const URL = "http://192.168.0.9:5000/api/v1";

const instance = axios.create({
  baseURL: URL,
});

export default instance;
