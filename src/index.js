import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); 

let rerenderEntireTree = (state) => {
    root.render(
      <React.StrictMode>
        <App state={store.getState()} 
        dispatch={store.dispatch.bind(store)} 
        store={store}
        // isFriend={store.isFriend.bind(store)}
        />
      </React.StrictMode>
    );
  }

rerenderEntireTree(store.getState())

reportWebVitals();

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})
