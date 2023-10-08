import UsersAPIComponent from "./UsersAPIComponent";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUserCountActionCreator
} from "../../../redux/usersReducer";

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


export default connect(mapStateToProps, mapDispatchToState)(UsersAPIComponent);
