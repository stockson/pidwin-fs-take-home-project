import * as actionTypes from "../../constants/actionTypes";
import * as messages from "../../messages";
import * as api from "../../api";

const restart = () => async (dispatch) => {
  try {
    const { data: { game } } = await api.restart();
    dispatch({ type: actionTypes.RESTART, game });
    messages.success("Tokens Reset")
  } catch (error) {
    messages.error(error.response.data.message);
  }
};

export default restart