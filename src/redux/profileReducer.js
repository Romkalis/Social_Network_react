const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    postsData: [
      { id: 1, post: "Hey! I'm First", like: 5 },
      { id: 2, post: "Ololo trololo im driver NLO", like: 25 },
      { id: 3, post: "wof wof?", like: 15 },
      { id: 4, post: "Meow", like: 2 },
      { id: 5, post: "Hi guys, how are your tails?", like: 1 },
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
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

export const updateNewPostActionCreator = (newText) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText });
export const addPostActionCreator = () =>({ type: 'ADD-POST' });
export default profileReducer;