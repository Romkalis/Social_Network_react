import Users from "./UsersClass"
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
} from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    // в редакс стейт формируется в reducers, как ключ объекта.
  };
};
let mapDispatchToState = (dispatch) => {
  return {
    followUser: (userId) => 
    {dispatch(followActionCreator(userId))},
    unfollowUser: (userId) => dispatch(unfollowActionCreator(userId)),
    setUsers: (users) => {alert('dispatch'); debugger; dispatch(setUsersActionCreator(users))},
  };

};


const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToState
)(Users);

export default UsersContainer 