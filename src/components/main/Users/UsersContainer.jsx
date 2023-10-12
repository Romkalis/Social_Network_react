import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  setIsFetching,
} from "../../../redux/usersReducer";

import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";

class UsersContainer extends React.Component {

  componentDidMount = () => {
    this.props.setIsFetching(true);
    // действия выполняются когда компонента встроена в DOM

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setIsFetching(false);
        this.props.setUsers(responce.data.items);
        this.props.setTotalUserCount(responce.data.totalCount);
      });
  };

  onPageChanged = (item) => {
    this.props.setIsFetching(true);
    // функция обработчик-событий.
    this.props.setCurrentPage(item);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setIsFetching(false);
        this.props.setUsers(responce.data.items);
      });
  };

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
        />
      </>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(
    mapStateToProps, {follow, unfollow, setUsers, 
    setTotalUserCount, setCurrentPage, setIsFetching,})
  (UsersContainer);
