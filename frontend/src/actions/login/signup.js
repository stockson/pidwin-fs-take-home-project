import * as actionTypes from "../../constants/actionTypes";
import * as api from "../../api";
import * as messages from "../../messages";

const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
		dispatch({ type: actionTypes.LOGIN, data })

    history("/");
    // messages.success("Login Successful");
  } catch (error) {
    // move to middleware
    if (error.response.status === 401) {
      messages.error("Login Expired")
      await dispatch({ type: actionTypes.LOGOUT })
    }
    messages.error(error.response.data.message);
  }
};

export default signup