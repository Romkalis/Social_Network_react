import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {state, subscribe} from "./redux/state.js";
// import subscribe from "./redux/state.js";
// import { addPost } from "./redux/state.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateNewPostText, updateMessageText, addMessage } from './redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root')); 

let rerenderEntireTree = () => {
    root.render(
      <React.StrictMode>
        <App state={state} 
        addPost={addPost} 
        updateNewPostText={updateNewPostText}
        updateMessageText={updateMessageText}
        addMessage={addMessage}/>
      </React.StrictMode>
    );
  }

rerenderEntireTree(state)

reportWebVitals();

subscribe(rerenderEntireTree)
