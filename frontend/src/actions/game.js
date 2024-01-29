import { FLIP_COIN } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

export const flipCoin = (gameData) => async (dispatch) => {
  try {
    const { data } = await api.flipCoin(gameData);
    dispatch({ type: FLIP_COIN, data });
    // messages.success("Flipped Coin");
  } catch (error) {
    messages.error(error.response.data.message);
  }
};