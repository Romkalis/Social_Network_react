import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import undefAva from "../../../assets/undefAva.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
      
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((responce) => {
          this.props.setUsers(responce.data.items);
        });
  }
  // это можем не писать, это дефолтные значения.

  getUsers = () => {

  };

  render() {

    return (
      <section>
        <button onClick={this.getUsers}>Загрузи user-ов</button>
        <ul className={style.usersList}>
          {this.props.users.map((user) => {
            return (
              <li className={style.userItem}>
                <div className={style.usersAva}>
                  <img
                    className={style.avatar}
                    src={
                      user.photos.small === null ? undefAva : user.photos.small
                    }
                    alt="avatar"
                  />

                  {user.followed ? (
                    <button
                      className={style.followButton}
                      onClick={() => this.props.followUser(user.id)}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      className={style.followButton}
                      onClick={() => this.props.unfollowUser(user.id)}
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
  }
}

export default Users;
