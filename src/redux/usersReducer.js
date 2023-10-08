const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"

let initialState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
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
      return {
        ...state,
        users: [
          // ...state.users, 
          ...action.users],
        
        // этот action отвечает за новых пользователей, пришедших с сервера,
        //тк. у нас уже был и юзеры  массиве, то мы добавляем через спред-оператор.
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      }
    default:
      return state;
  }
};

export let followActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export let unfollowActionCreator = (userId) => ({ type: FOLLOW, userId });
export let setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export let setCurrentPageActionCreator = (pageNumber) => ({
  type: SET_PAGE,
  pageNumber,
});
export let setTotalUserCountActionCreator= (count) => ({type: SET_TOTAL_USER_COUNT, totalCount: count })

export default usersReducer;
