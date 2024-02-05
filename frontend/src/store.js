import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
import { getLocalState, subscribeLocalState } from "./util/localStorage"

const localState = getLocalState()

// const store = createStore(reducers, compose(applyMiddleware(thunk)));
const store = createStore(reducers, localState, compose(applyMiddleware(thunk)));
subscribeLocalState( store )

// allow store access outside of components
export default store