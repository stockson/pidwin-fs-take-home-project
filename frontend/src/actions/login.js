import { LOGIN, LOGOUT, GAME_INIT } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

import { setToken } from "../util/localStorage"


export const login = (formData, history) => async (dispatch) => {
  try {
    const {data: {token, profile, game}} = await api.login(formData);

    // move to middleware so every request refreshes token
    setToken( token )

    dispatch({ type: LOGIN, profile });
    dispatch({ type: GAME_INIT, game });
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

// export const signup = (formData, history) => async (dispatch) => {
//   try {
//     const { data: { profile, game } } = await api.signUp(formData);
//     dispatch({ type: LOGIN, profile });
//     dispatch({ type: GAME_INIT, game });
//     history("/");
//     // messages.success("Login Successful");
//   } catch (error) {
//     messages.error(error.response.data.message);
//   }
// };