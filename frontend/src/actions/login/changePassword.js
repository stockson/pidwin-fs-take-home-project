// import * as actionTypes from "../../constants/actionTypes";
import * as api from "../../api";
import * as messages from "../../messages";

const changePassword = (formData, history) => async (dispatch) => {
  try {
    // const { data } = await api.changePassword(formData);
    await api.changePassword(formData);

    // dispatch({ type: LOGOUT });

    messages.success("Password Change Was Successful");
    history("/");
  } catch (error) {
    messages.error(error.response.data.message);
  }
};

export default changePassword