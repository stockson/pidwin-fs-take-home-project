import { FLIP_COIN, RESTART, LOGOUT } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

export const flipCoin = (gameData) => async (dispatch) => {
  try {
    const { data: { game, result } } = await api.flipCoin(gameData);
    dispatch({ type: FLIP_COIN, game });
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
    const { data: { game } } = await api.restart();
    dispatch({ type: RESTART, game });
    messages.success("Tokens Reset")
  } catch (error) {
    if (error.response.status === 401) {
      messages.error("Login Expired")
      await dispatch({ type: LOGOUT })
    }
    messages.error(error.response.data.message);
  }
};
