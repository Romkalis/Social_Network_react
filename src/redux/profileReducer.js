const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  postsData: [
    { id: 1, post: "Hey! I'm First", like: 5 },
    { id: 2, post: "Ololo trololo im driver NLO", like: 25 },
    { id: 3, post: "wof wof?", like: 15 },
    { id: 4, post: "Meow", like: 2 },
    { id: 5, post: "Hi guys, how are your tails?", like: 1 },
  ],
  profile: null,
  // так как нам с сервера сейчас придет через экшн криейтор объект профайл, надо его заранее заинициализировать, укажем нуль, чтобы явно было понятно, что в момент инициализации объект пустой.
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

    case SET_USER_PROFILE:

    return {
     ...state,
     profile: action.profile,
     // если кейс setUserProfile, корпируем state, меняем в нем профайл, на профайл из экшена.

    }
    default: return state;
  }
  
};

export const updateNewPostActionCreator = (newText) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: newText,
});
export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export default profileReducer;
