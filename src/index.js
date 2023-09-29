import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state.js";
// import subscribe from "./redux/state.js";
// import { addPost } from "./redux/state.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { addPost, updateNewPostText, updateMessageText, addMessage } from './redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root')); 

let rerenderEntireTree = () => {
    root.render(
      <React.StrictMode>
        <App state={store.getState()} 
        dispatch={store.dispatch.bind(store)} 
        isFriend={store.isFriend.bind(store)}/>
      </React.StrictMode>
    );
  }

rerenderEntireTree(store.getState())

reportWebVitals();

store.subscribe(rerenderEntireTree)
