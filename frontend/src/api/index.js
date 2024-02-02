import axios from "axios";
import { getToken } from "../util/localStorage";

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {

  const tokenData = getToken()
  if (tokenData)
    req.headers.Authorization = `Bearer ${tokenData.token}`;

  return req;
});

// Handle token expiration here?

// API.interceptors.response.use((resp) => {
//   return resp;
// }, (err) => {
//   // if (err.response.status == 401)
//   return Promise.reject(err)
// })

export const login = (formData) => API.post("/api/user/login", formData);
export const signUp = (formData) => API.post("/api/user/signup", formData);
export const changePassword = (formData) =>
  API.post("/api/user/changePassword", formData);

// Game
export const flipCoin = (flipData) => API.post("/api/game/flipCoin", flipData);
export const restart = () => API.post("/api/game/restart");