const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users]
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

        case SET_USERS:
          alert('set users')
          return {
            ...state, users: [...state.users, ...action.users]
            // этот action отвечает за новых пользователей, пришедших с сервера, 
            //тк. у нас уже был и юзеры  массиве, то мы добавляем через спред-оператор.
          }
      default:

        return state;
  }

};

export let followActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export let unfollowActionCreator = (userId) => ({ type: FOLLOW, userId });
export let setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;
