import React from "react";
import style from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  console.log(props.friend[2])

  return (
    <li className="friendItem">
      <NavLink className={style.friendItem}>
        <img  className={style.avatar} src={props.friend[2].ava} alt="avatar" />
        <span className={style.name}>{props.friend[2].name}</span>
      </NavLink>
    </li>
  );
};

export default Friend;
