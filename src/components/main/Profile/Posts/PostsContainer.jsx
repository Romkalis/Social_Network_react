import Posts from "./Posts";
import {
  addPostActionCreator,
  updateNewPostActionCreator,} from "../../../../redux/profileReducer";
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsData: state.profilePage.postsData,
  }
}

let mapDispatchToStore = (dispatch) => {
  return {
    updateNewPostText: (newText) => dispatch(updateNewPostActionCreator(newText)),
    addPost: () => dispatch(addPostActionCreator()),
  }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToStore)(Posts)

export default PostsContainer;
