import axios from "axios";
import store from "../store"
import * as actionTypes from "../constants/actionTypes"

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {

  const { token } = store.getState()
  if (token)
    req.headers.Authorization = `Bearer ${token.encoded}`;

  return req;
});

API.interceptors.response.use((resp) => {
  return resp;
}, (error) => {
  console.error(error)

  // Handle Token Expiration
  // should switch from status code to errId
  if (error.response.status === 401) {
    store.dispatch({ type: actionTypes.LOGOUT })
  }

  return Promise.reject(error)
})

export const login = (formData) => API.post("/api/user/login", formData);
export const signUp = (formData) => API.post("/api/user/signup", formData);
export const changePassword = (formData) =>
  API.post("/api/user/changePassword", formData);

// Game
export const flipCoin = (flipData) => API.post("/api/game/flipCoin", flipData);
export const restart = () => API.post("/api/game/restart");