import React from "react";
import style from "./Post.module.css";
// import Avatar from "../../../Avatar/Avatar";

const Post = (props) => {

  return (
    <div className={style.item}>
      <img className={style.avatar} src={props.ava} alt="avatar" />
      <span>{props.message}</span>
      <div className={style.likes}>
        <span className={style.like}>Like</span>
        <span className={style.likesCount}> {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
