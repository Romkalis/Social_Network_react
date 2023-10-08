import React from "react";
import { connect } from "react-redux";
// import {
//   followActionCreator,
//   unfollowActionCreator,
//   setUsersActionCreator,
//   setCurrentPageActionCreator,
//   setTotalUserCountActionCreator,
//   setIsFetchingActionCreator,
// } from "../../../redux/usersReducer";
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
  // constructor(props) {
  //   super(props);
  //   // это можем не писать, это дефолтные значения.
  // }

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

    // в редакс стейт формируется в reducers, как ключ объекта.
  };
};






// let mapDispatchToProps = (dispatch) => {
//   return {
//     followUser: (userId) => {
//       dispatch(followActionCreator(userId));
//     },

//     unfollowUser: (userId) => dispatch(unfollowActionCreator(userId)),

//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },

//     setTotalUserCount: (count) => {
//       dispatch(setTotalUserCountActionCreator(count));
//     },

//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },

//     setIsFetching: (boolean) => {
//       dispatch(setIsFetchingActionCreator(boolean));
//     },
//   };
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  {follow, unfollow, setUsers, 
    setTotalUserCount, setCurrentPage, setIsFetching,}
   )(UsersContainer);
