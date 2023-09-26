import React from "react";
import style from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  let userFriends = props.friend.friends.map((friend) => {
    return (
      <li className="friendItem">
        <NavLink className={style.friendItem} key={friend.id}>
          <img className={style.avatar} src={friend.ava} alt="avatar" />
          <span className={style.name}>{friend.name}</span>
        </NavLink>
      </li>
    );
  });

  return (
    <>
    { userFriends }
    </>
  )
};

export default Friend;
