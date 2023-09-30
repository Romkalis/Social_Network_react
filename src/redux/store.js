import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, post: "Hey! I'm First", like: 5 },
        { id: 2, post: "Ololo trololo im driver NLO", like: 25 },
        { id: 3, post: "wof wof?", like: 15 },
        { id: 4, post: "Meow", like: 2 },
        { id: 5, post: "Hi guys, how are your tails?", like: 1 },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    },
  },
  _callSubscriber() {
    // функция обновляющая страницу после изменений
    console.log("I will never be in console");
  },
  getState() {
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

    this._callSubscriber(this._state);
  },

  isFriend() {
    const friends = 
this._state.messagesPage.dialogsData.filter(
      (user) => user.isFriend === 1
    );
    // проверка, если в массиве dialogs data у объекта есть атрибут isFriend, добавляем сюда.
    return friends; // Возвращаем массив друзей
  },
  // --------- функция наблюдатель, для избежания циркулярной зависимости от index.js ----------------
  subscribe(observer) {
    this._callSubscriber = observer; //принимает renderEntireTree как колбэк и вызывает здесь.
    //паттерн observer, по этому паттерну работают обработчики событий.
    // при вызове subscriber функиции присваетвается другая ф-я в качестве колбэка.
  },
};

export default store;

window.store = store;
