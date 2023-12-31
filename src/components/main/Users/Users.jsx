import React from "react";
import style from "./Users.module.css";
import undefAva from "../../../assets/undefAva.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let currentPage = props.currentPage;
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

  return (
    <section>
      <ul className={style.paginationList}>
        {pages.map((item) => {
          return (
            <button
              className={item === currentPage ? style.selectedPage : ""}
              onClick={() => props.onPageChanged(item)}
            >
              {item}
            </button>
          );
        })}
      </ul>
      <ul className={style.usersList}>
        {props.users.map((user) => {
          return (
            <li className={style.userItem}>
              <div className={style.usersAva}>
                <NavLink to={'/profile/' + user.id}>
                <img
                  className={style.avatar}
                  src={
                    user.photos.small === null ? undefAva : user.photos.small
                  }
                  alt="avatar"
                />
                </NavLink>
                {user.followed ? (
                  <button
                    className={style.followButton}
                    onClick={() => props.follow(user.id)}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    className={style.followButton}
                    onClick={() => props.unfollow(user.id)}
                  >
                    Unfollow
                  </button>
                )}
              </div>
              <div className={style.userInfo}>
                <div className={style.userFullName}>{user.name}</div>
                <div className={style.userStatus}>{user.status}</div>
                <div className={style.location}>
                  <div>{"user.location.country"}</div>
                  <div>{"user.location.city"}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Users;
