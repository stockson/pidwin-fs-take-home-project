import { LOGIN, LOGOUT } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: LOGIN, data });
    history("/");
    // messages.success("Login Successful");
  } catch (error) {
    messages.error(error.response.data.message);
  }
};

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, data });
    history("/");
    // messages.success("Login Successful");
  } catch (error) {
    if (error.response.status === 401) {
      messages.error("Login Expired")
      await dispatch({ type: LOGOUT })
    }
    messages.error(error.response.data.message);
  }
};

export const changePassword = (formData, history) => async (dispatch) => {
  try {
    // const { data } = await api.changePassword(formData);
    await api.changePassword(formData);
    dispatch({ type: LOGOUT });
    messages.success("Password Change Was Successful");
    history("/");
  } catch (error) {

    if (error.response.status === 401) {
      messages.error("Login Expired")
      await dispatch({ type: LOGOUT })
    }

    messages.error(error.response.data.message);
  }
};