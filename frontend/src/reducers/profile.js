import { LOGIN, LOGOUT } from '../constants/actionTypes';


const initState = null

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.profile };

    case LOGOUT:
      return { ...state, ...initState};

    default:
      return state;
  }
}
export default profileReducer;