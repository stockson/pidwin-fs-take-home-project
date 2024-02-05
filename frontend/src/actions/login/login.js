import * as api from "../../api";
import * as messages from "../../messages";

const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
		dispatch({ type: "LOGIN", data })

    history("/");
    // messages.success("Login Successful");
  } catch (error) {
    messages.error(error.response.data.message);
  }
};

export default login