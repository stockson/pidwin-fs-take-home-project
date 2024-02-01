import { LOGIN, LOGOUT } from '../constants/actionTypes';
import { setLocalData } from "../util/localStorage"

const profileInit = {
  name: null,
  email: null,
}
// const profileInit = null

const profileReducer = (state = profileInit, action) => {
  switch (action.type) {
    case LOGIN:
      setLocalData("profile", action.profile)
      return { ...state, ...action.profile };

    case LOGOUT:
      localStorage.clear();
      return { ...state, ...profileInit};

    default:
      return state;
  }
}
export default profileReducer;