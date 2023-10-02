import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
      <App store={store} />
      </Provider>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

reportWebVitals();

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
