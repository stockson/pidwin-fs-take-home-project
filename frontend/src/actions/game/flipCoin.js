import * as actionTypes from "../../constants/actionTypes";
import * as api from "../../api";
import * as messages from "../../messages";

const flipCoin = (gameData) => async (dispatch) => {
  try {
    const { data: { game, result } } = await api.flipCoin(gameData);
    dispatch({ type: actionTypes.FLIP_COIN, game });
		return result
  } catch (error) {
    messages.error(error.response.data.message);
  }
};

export default flipCoin;