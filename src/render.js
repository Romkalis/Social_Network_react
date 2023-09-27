import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {state} from "./redux/state.js";
import { addPost, updateNewPostText } from './redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>
    );
  }