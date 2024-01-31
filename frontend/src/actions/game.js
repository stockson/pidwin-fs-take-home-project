import { FLIP_COIN, RESTART, LOGOUT } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

export const flipCoin = (gameData) => async (dispatch) => {
  try {
    const { data: { user, result } } = await api.flipCoin(gameData);
    dispatch({ type: FLIP_COIN, user });
		return result
  } catch (error) {

    // move to middleware
    if (error.response.status === 401) {
      messages.error("Login Expired")
      await dispatch({ type: LOGOUT })
    }

    messages.error(error.response.data.message);
  }
};



export const restart = () => async (dispatch) => {
  try {
    const { data: { user } } = await api.restart();
    dispatch({ type: RESTART, user });
    messages.success("Tokens Reset")
  } catch (error) {
    if (error.response.status === 401) {
      messages.error("Login Expired")
      await dispatch({ type: LOGOUT })
    }
    messages.error(error.response.data.message);
  }
};
