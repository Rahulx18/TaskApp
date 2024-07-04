import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import store from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
