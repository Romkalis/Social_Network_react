import React from "react";
import Posts from "./Posts";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/profileReducer";

const PostsContainer = (props) => {
  //------отвечает за добавление поста при нажатии на кнопку--------
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  //-------отвечает за добаввление текста, при изменении текстареа------
  // при введении нового символа данные отправляются в пропс,
  //приходят оттуда и отрисвываются в UI
  let onPostChange = (newText) => {
    let action = updateNewPostActionCreator(newText);
    props.dispatch(action);
  };
  return (
    <>
      <Posts
        updateNewPostText={onPostChange}
        addPost={addPost}
        newPostText={props.newPostText}
        postsData={props.postsData}
      />
      </>
  );

};

export default PostsContainer;
