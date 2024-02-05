import { combineReducers } from "redux";
import profile from "./profile";
import game from "./game"
import token from "./token"
import genTokenData from "../util/genTokenData"

const nestedReducers = combineReducers({
    profile, game, token
});

const initState = {
    profile: null,
    game: null,
    token: null
}

export default function rootReducer(state = initState, action) {
    if (action.type === "LOGOUT")
        return { ...state, ...initState}

    else if (action.type === "LOGIN") {
        // shouldn't be doing this logic from reducer?
        const token = genTokenData(action.data.token)
        return { ...state, ...action.data, token }
    }

    return nestedReducers(state, action);
}

