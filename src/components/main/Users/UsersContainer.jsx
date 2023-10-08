import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUserCountActionCreator
} from "../../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
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

    return <Users 
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    onPageChanged={this.onPageChanged}
    users={this.props.users}
    followUser={this.props.followUser}
    unfollowUser={this.props.unfollowUser}

    />
   
  };
}



let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    
    // в редакс стейт формируется в reducers, как ключ объекта.
  };
};
let mapDispatchToState = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followActionCreator(userId));
    },

    unfollowUser: (userId) => dispatch(unfollowActionCreator(userId)),

    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },

    setTotalUserCount: (count) => {
      dispatch(setTotalUserCountActionCreator(count))
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToState)(UsersContainer);
