const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  postsData: [
    { id: 1, post: "Hey! I'm First", like: 5 },
    { id: 2, post: "Ololo trololo im driver NLO", like: 25 },
    { id: 3, post: "wof wof?", like: 15 },
    { id: 4, post: "Meow", like: 2 },
    { id: 5, post: "Hi guys, how are your tails?", like: 1 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  // debugger
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        post: stateCopy.newPostText,
        like: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default: return state;
  }
  // if (action.type === ADD_POST) {
  //   let newPost = {
  //     id: 5,
  //     post: stateCopy.newPostText,
  //     like: 0,
  //   };
  //   stateCopy.postsData.push(newPost);
  //   stateCopy.newPostText = "";
  // } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   stateCopy.newPostText = action.newText;
  // }

  return stateCopy;
};

export const updateNewPostActionCreator = (newText) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: newText,
});
export const addPostActionCreator = () => ({ type: "ADD-POST" });
export default profileReducer;
