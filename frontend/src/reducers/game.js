import { FLIP_COIN, RESTART } from '../constants/actionTypes';
import getUserInitial from './getUserInitial';

const gameReducer = (state = getUserInitial(), action) => {
    switch (action.type) {
        case FLIP_COIN:
            localStorage.setItem('user', JSON.stringify({ ...action?.user }));
            return { ...state, user: action?.user };

        case RESTART:
            localStorage.setItem('user', JSON.stringify({ ...action?.user }));
            return { ...state, user: action?.user };

        default:
            return state;
    }
}
export default gameReducer;