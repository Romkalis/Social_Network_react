const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
    messagesData: [
      { id: 1, text: "Hey! I'm First" },
      { id: 2, text: "Ololo trololo im driver NLO" },
      { id: 3, text: "wof wof?" },
      { id: 4, text: "Meow" },
      { id: 5, text: "Hi guys, how are your tails?" },
    ],
    dialogsData: [
      {
        id: 1,
        name: "Dima",
        ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
      },
      {
        id: 2,
        name: "Roma",
        isFriend: 1,
        ava: "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg",
      },
      {
        id: 3,
        name: "Andrew",
        ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
      },
      {
        id: 4,
        name: "Lyci",
        isFriend: 1,
        ava: "https://i.pinimg.com/474x/c2/38/23/c238234d4e2ef20b768f9bfe5766745f.jpg",
      },
      {
        id: 5,
        name: "Anton",
        ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
      },
      {
        id: 6,
        name: "Lymen",
        isFriend: 1,
        ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkyhoMA_A3DhFhKFjbeAvBXqJHZ41elwKpbq5eOZerw&s",
      },
      {
        id: 7,
        name: "Yukki",
        isFriend: 1,
        ava: "https://royal-groom.ru/sites/default/files/breed/shelti.jpg",
      },
      {
        id: 8,
        name: "Tolya",
        ava: "https://q2m9b9t2.stackpathcdn.com/wp-content/uploads/2018/08/BassamAllam4.jpg",
      },
    ],
    newMessageText: "",
}


const messagesReducer = (state = initialState, action) => {

  // debugger

  if (action.type === ADD_MESSAGE) {
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