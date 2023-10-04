const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
  users: []
//   {
//       [
//     {
//       id: 1,
//       fullName: "Dima",
//       status: "I like football",
//       location: { country: "Egypt", city: "Cairo" },
//       ava:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
//       followed: true,
//     },
//     {
//       id: 2,
//       fullName: "Roma",
//       status: "Crazy World",
//       location: { country: "Brazil", city: "Rio" },
//       ava:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
//       followed: false,
//     },
//     {
//       id: 3,
//       fullName: "Lyci",
//       status: "Dogs better people",
//       location: { country: "Russia", city: "Yekaterinburg" },
//       ava:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
//       followed: false,
//     },
//     {
//       id: 4,
//       fullName: "Yukki",
//       status: "Bones - tastiest food",
//       location: { country: "Egypt", city: "Hurgada" },
//       ava:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
//       followed: false,
//     },
//   ]
// }
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
          ...state, users: [...state.users, ...action.users]// этот action отвечает за новых пользователей, пришедших с сервера, тк. у нас уже был и юзеры  массиве, то мы добавляем через спред-оператор.
        }
    default:
      return state;
  }
};

export let followActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export let unfollowActionCreator = (userId) => ({ type: FOLLOW, userId });
export let setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;
