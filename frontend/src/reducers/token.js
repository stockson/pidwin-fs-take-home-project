import { TOKEN_UPDATE, TOKEN_CLEAR } from '../constants/actionTypes';

const initState = null

const tokenReducer = (state = initState, action) => {
	switch (action.type) {
		case TOKEN_UPDATE:
			return { ...state, ...action.token };

		case TOKEN_CLEAR:
			return { ...state, ...initState };

		default:
			return state;
	}
}
export default tokenReducer;