//Dans ce fichier , nous devons envelopper notre composant racine avec le composant Provider de react-redux pour que Redux soit accessible dans toute l'application.
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);