import { FLIP_COIN, RESTART } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

export const flipCoin = (gameData) => async (dispatch) => {
  try {
    const { data: { user, result } } = await api.flipCoin(gameData);
    dispatch({ type: FLIP_COIN, user });
		return result
    // messages.success("Flipped Coin");
  } catch (error) {
    messages.error(error.response.data.message);
  }
};



export const restart = () => async (dispatch) => {
  try {
    const { data: { user } } = await api.restart();
    dispatch({ type: RESTART, user });
    messages.success("Tokens Reset")
  } catch (error) {
    messages.error(error.response.data.message);
  }
};
