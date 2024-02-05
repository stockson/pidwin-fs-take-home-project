import { GAME_INIT, FLIP_COIN, RESTART, GAME_LOGOUT } from '../constants/actionTypes';


const initState = null


const gameReducer = (state = initState, action) => {
	switch (action.type) {
		case GAME_INIT:
		case FLIP_COIN:
		case RESTART:
			return { ...state, ...action.game };

		case GAME_LOGOUT:
			return initState;

		default:
			return state;
	}
}
export default gameReducer;