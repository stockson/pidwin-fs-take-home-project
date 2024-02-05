import * as actionTypes from "../../constants/actionTypes"
import * as messages from "../../messages";

const logout = (dispatch, history) => {
  dispatch({ type: actionTypes.LOGOUT });
  messages.info("Logged Out")
  history("/auth");
}

export default logout