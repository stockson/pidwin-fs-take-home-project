import { LOGIN, LOGOUT, GAME_INIT, GAME_LOGOUT } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

import { setToken } from "../util/localStorage"


export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatchLogin( dispatch, data )

    history("/");
    // messages.success("Login Successful");
  } catch (error) {
    // move to middleware
    if (error.response.status === 401) {
      messages.error("Login Expired")
      await dispatch({ type: LOGOUT })
    }
    messages.error(error.response.data.message);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatchLogin(dispatch, data)

    history("/");
    // messages.success("Login Successful");
  } catch (error) {
    // move to middleware
    if (error.response.status === 401) {
      messages.error("Login Expired")
      await dispatch({ type: LOGOUT })
    }
    messages.error(error.response.data.message);
  }
};

function dispatchLogin(dispatch, data) {
  const { token, profile, game } = data

  // move to middleware so every request refreshes token
  setToken( token )

  // consolidate into one action, parent reducer?
  dispatch({ type: LOGIN, profile });
  dispatch({ type: GAME_INIT, game });
}

export const changePassword = (formData, history) => async (dispatch) => {
  try {
    // const { data } = await api.changePassword(formData);
    await api.changePassword(formData);

    // consolidate into one action, parent reducer?
    // dispatch({ type: GAME_LOGOUT });
    // dispatch({ type: LOGOUT });

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

