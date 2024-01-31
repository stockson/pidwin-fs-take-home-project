import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {

  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")
      }`;
  }

  return req;
});

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
// keeping route path because user is mutating
export const flipCoin = (flipData) => API.post("/api/user/flipCoin", flipData);
export const restart = () => API.post("/api/user/restart");