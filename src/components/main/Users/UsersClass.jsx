import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import undefAva from "../../../assets/undefAva.png";

class UsersAPIComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // это можем не писать, это дефолтные значения.
  // }

  componentDidMount = () => {
    // действия выполняются когда компонента встроена в DOM
    console.log(this.props);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setUsers(responce.data.items);
        this.props.setTotalUserCount(responce.data.totalCount)
      });
  };

  onPageChanged = (item) => { // функция обработчик-событий. 
    //каждый раз при нажатии на кнопку страницы - запрашивает новые данные с сервера
    this.props.setCurrentPage(item);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setUsers(responce.data.items);
      });
  }

  render = () => {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let currentPage = this.props.currentPage;
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return <Users />
    (
      <section>
        <ul className={style.paginationList}>
          {pages.map((item) => {
            return (
              <span
                className={item === currentPage ? style.selectedPage : ""}
                onClick={() => this.onPageChanged(item)}
              >
                {item}
              </span>
            );
          })}
        </ul>
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
  };
}

export default Users;
