import React from "react";
import Posts from "./Posts";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/profileReducer";
import StoreContext from "../../../../StoreContext";


const PostsContainer = () => {

  return (
      <StoreContext.Consumer>{
        (store) => {

          let state = store.getState()
          //------отвечает за добавление поста при нажатии на кнопку--------
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          };
          //-------отвечает за добавление текста, при изменении textarea------
        
          let onPostChange = (newText) => {
            let action = updateNewPostActionCreator(newText);
            store.dispatch(action);
          };

          return (
            <Posts
        updateNewPostText={onPostChange}
        addPost={addPost}
        newPostText={state.profilePage.newPostText}
        postsData={state.profilePage.postsData}
      />
          )
        }
        }</StoreContext.Consumer>
      
  );

};

export default PostsContainer;
