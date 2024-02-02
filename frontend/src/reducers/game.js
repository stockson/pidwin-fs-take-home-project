import { GAME_INIT, FLIP_COIN, RESTART, GAME_LOGOUT } from '../constants/actionTypes';
import { setLocalData } from "../util/localStorage"

const getGameInit = () => ({
	tokens: null,
	history: null
})


const gameReducer = (state = getGameInit(), action) => {
	switch (action.type) {
		case GAME_INIT:
		case FLIP_COIN:
		case RESTART:
			setLocalData( "game", action.game )
			return { ...state, ...action.game };

		case GAME_LOGOUT:
			localStorage.clear(); // redundant with profile logout
			return { ...state, ...getGameInit() };

		default:
			return state;
	}
}
export default gameReducer;