const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const profileReducer = (state, action) => {
// debugger

if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      post: state.newPostText,
      like: 0,
    };
    state.postsData.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }


  return state;
}

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     post: this._state.profilePage.newPostText,
    //     like: 0,
    //   };
    //   this._state.profilePage.postsData.push(newPost);
    //   this._state.profilePage.newPostText = "";
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);

export const updateNewPostActionCreator = (newText) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText });
export const addPostActionCreator = () =>({ type: 'ADD-POST' });
export default profileReducer;