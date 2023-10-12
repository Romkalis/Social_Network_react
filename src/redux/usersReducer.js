const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
      };

    case TOGGLE_IS_FETCHING: 
    return {
      ...state,
      isFetching: action.isFetching
    }
    default:
      return state;
  }
};

export let follow = (userId) => ({ type: UNFOLLOW, userId });
export let unfollow = (userId) => ({ type: FOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setCurrentPage = (pageNumber) => ({ type: SET_PAGE, pageNumber,});
export let setTotalUserCount= (count) => ({type: SET_TOTAL_USER_COUNT, totalCount: count })
export let setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;
