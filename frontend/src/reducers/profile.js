import { LOGIN, LOGOUT } from '../constants/actionTypes';
import { setLocalData } from "../util/localStorage"

const getProfileInit = () => ({
  name: null,
  email: null,
})
// const profileInit = null

const profileReducer = (state = getProfileInit, action) => {
  switch (action.type) {
    case LOGIN:
      setLocalData("profile", action.profile)
      return { ...state, ...action.profile };

    case LOGOUT:
      localStorage.clear();
      return { ...state, ...getProfileInit()};

    default:
      return state;
  }
}
export default profileReducer;