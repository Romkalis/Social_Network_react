
const FRIENDS = 'FRIENDS';

let initialState = {}

let isFriend = () => {
      const friends = this._state.messagesPage.dialogsData.filter(
        (user) => user.isFriend === 1
      )
      // проверка, если в массиве dialogs data у объекта есть атрибут isFriend, добавляем сюда.
      return friends; // Возвращаем массив друзей
    }

let navbarReducer = (state = initialState, action) => {
    let friendsList = isFriend()
    return {
        ...state,
        dialogsData: [...state.dialogsData.friends, friendsList]
    }

 
}