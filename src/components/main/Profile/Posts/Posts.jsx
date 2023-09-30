import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
// import addPostActionCreator, updateNewPostActionCreator  from "../../../../redux/profileReducer";
import { addPostActionCreator } from "../../../../redux/profileReducer";
import { updateNewPostActionCreator } from "../../../../redux/profileReducer";


const Posts = (props) => {
  let newPostElement = React.createRef();

  //------отвечает за добавление поста при нажатии на кнопку--------
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  //-------отвечает за добаввление текста, при изменении текстареа------
  // при введении нового символа данные отправляются в пропс,
  //приходят оттуда и отрисвываются в UI
  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(newText));
  };

  let postsElements = props.postsData.map((post) => (
    <Post
      message={post.post}
      likesCount={post.like}
      ava="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4bWNz_tAe4s6UwXsk88ud4ZxABoiKdot6A&usqp=CAU"
    />
  ));

  return (
    <div className={style.posts}>
      <h2 className="postsTitle">My Posts</h2>
      <p>
        <textarea
          ref={newPostElement}
          className={style.textarea}
          value={props.newPostText}
          onChange={() => {
            onPostChange();
          }}
        />
      </p>
      <div>
        <button className={style.newPostButton} onClick={addPost} type="button">
          New Post
        </button>
      </div>
      <div className={style.item}>
        New Post
        {postsElements}
      </div>
    </div>
  );
};

export default Posts;
