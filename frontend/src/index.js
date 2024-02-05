import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./reset.css";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/Default";

import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
