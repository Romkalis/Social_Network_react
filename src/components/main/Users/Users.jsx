import React from "react";
import style from './Users.module.css'

let Users = (props) => {

  // debugger
  if (props.users.length === 0){
   props.setUsers([
    {
      id: 1,
      fullName: "Dima",
      status: "I like football",
      location: { country: "Egypt", city: "Cairo" },
      ava:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
      followed: true,
    },
    {
      id: 2,
      fullName: "Roma",
      status: "Crazy World",
      location: { country: "Brazil", city: "Rio" },
      ava:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
      followed: false,
    },
    {
      id: 3,
      fullName: "Lyci",
      status: "Dogs better people",
      location: { country: "Russia", city: "Yekaterinburg" },
      ava:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
      followed: false,
    },
    {
      id: 4,
      fullName: "Yukki",
      status: "Bones - tastiest food",
      location: { country: "Egypt", city: "Hurgada" },
      ava:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDFPey7181729G4wqDS_4dVJ2_s-iThWUwQfFo_YkEw&s",
      followed: false,
    },
  ],)
}

  return (
    <section>
      <ul className={style.usersList}>
        {props.users.map((user) => {
          return (
            <li className={style.userItem}>
              <div className={style.usersAva}>
                <img className={style.avatar} src={user.ava} alt="avatar" />
                  
                {user.followed 
                ? <button className={style.followButton} onClick={() => props.followUser(user.id)}>Follow</button> 
                : <button className={style.followButton} onClick={() => props.unfollowUser(user.id)}>Unfollow</button>}
                
              </div>
              <div className={style.userInfo}>
                <div className={style.userFullName}>
                   {user.fullName}
                </div>
                <div className={style.userStatus}>
                  {user.status}
                </div>
                <div className={style.location}>
                  <div>{user.location.country}</div>
                  <div>{user.location.city}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Users;
