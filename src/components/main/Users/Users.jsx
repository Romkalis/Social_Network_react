// import React from "react";
// import style from "./Users.module.css";
// import axios from "axios";
// import undefAva from "../../../assets/undefAva.png";

// let Users = (props) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((responce) => {
//           props.setUsers(responce.data.items);
//         });
//     }
//   };

//   return (
//     <section>
//       <button onClick={getUsers}>загрузи user-ов</button>
//       <ul className={style.usersList}>
//         {props.users.map((user) => {
//           return (
//             <li className={style.userItem}>
//               <div className={style.usersAva}>
//                 <img
//                   className={style.avatar}
//                   src={
//                     user.photos.small === null ? undefAva : user.photos.small
//                   }
//                   alt="avatar"
//                 />

//                 {user.followed ? (
//                   <button
//                     className={style.followButton}
//                     onClick={() => props.followUser(user.id)}
//                   >
//                     Follow
//                   </button>
//                 ) : (
//                   <button
//                     className={style.followButton}
//                     onClick={() => props.unfollowUser(user.id)}
//                   >
//                     Unfollow
//                   </button>
//                 )}
//               </div>
//               <div className={style.userInfo}>
//                 <div className={style.userFullName}>{user.name}</div>
//                 <div className={style.userStatus}>{user.status}</div>
//                 <div className={style.location}>
//                   <div>{"user.location.country"}</div>
//                   <div>{"user.location.city"}</div>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// export default Users;
