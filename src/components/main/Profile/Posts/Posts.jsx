import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost()
  };

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.updateNewPostText(newText)
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
        <button className={style.newPostButton} onClick={onAddPost} type="button">
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
