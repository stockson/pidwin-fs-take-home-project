import { FLIP_COIN } from '../constants/actionTypes';

const gameReducer = (state = { gameData: null }, action) => {
    switch (action.type) {
        case FLIP_COIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, gameData: action?.data };

        default:
            return state;
    }
}
export default gameReducer;