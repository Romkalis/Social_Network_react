import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";


const Posts = (props) => {

  let newPostElement = React.createRef();
  let addPost = () => {
    alert(newPostElement.current.value)
  }

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
        <textarea ref={newPostElement} className={style.textarea}></textarea>
      </p>
      <div>
        <button className={style.newPostButton} onClick={ addPost } type="button">New Post</button>
      </div>
      <div className={style.item}>
        New Post

        {postsElements}

      </div>
    </div>
  );
};

export default Posts;
