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
        addPost={store.addPost.bind(store)} 
        updateNewPostText={store.updateNewPostText.bind(store)}
        updateMessageText={store.updateMessageText.bind(store)}
        addMessage={store.addMessage.bind(store)}/>
      </React.StrictMode>
    );
  }

rerenderEntireTree(store.getState())

reportWebVitals();

store.subscribe(rerenderEntireTree)
