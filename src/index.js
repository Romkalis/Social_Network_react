import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App store={store} />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

reportWebVitals();

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
