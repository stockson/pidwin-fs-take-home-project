import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import App from "./App";
import "./reset.css";
import "./index.css";
import reducers from "./reducers";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/Default";

import { getLocalData } from "./util/localStorage"

// localStorage.clear()
const localData = getLocalData()

const store = createStore(reducers, localData, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
