import store from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const messagesReducer = (state, action) => {

  // debugger

  if (action.type === ADD_MESSAGE) {
    console.log(store)
    let newMessage = {
      id: state.messagesData.length + 1,
      text: state.newMessageText,
    };
    state.messagesData.push(newMessage);
    state.newMessageText = "";

  } else if (action.type === UPDATE_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
    console.log(state.newMessageText)
  }

  return state
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (newText) => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: newText,
});
export default messagesReducer