import React from "react";
import style from "./Friends.module.css";
// import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  return (
    <aside>
      <h3 className={style.title}>Friends</h3>
      <ul className={style.friends_list}>
        <Friend isFriend={props.isFriend}></Friend> 
      </ul>
    </aside>

  );
};

export default Friends;
