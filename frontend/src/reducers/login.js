import { LOGIN, LOGOUT } from '../constants/actionTypes';
import getUserInitial from './getUserInitial';

const loginReducer = (state = getUserInitial(), action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", action?.data?.token);
            localStorage.setItem('user', JSON.stringify({ ...action?.data?.user }));
            return { ...state, token: action?.data?.token, user: action?.data?.user };

        case LOGOUT:
            console.log("logout reducer")
            localStorage.clear();
            return { ...state, token: null, user: null};

        default:
            return state;
    }
}
export default loginReducer;