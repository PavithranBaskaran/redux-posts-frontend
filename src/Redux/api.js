import axios from "axios";

const instance = axios.create({
  baseURL: "https://redux-post-backend.vercel.app",
});

export default instance;
