import React from "react";
import style from "./ProfileInfo.module.css";

const UserInfo = (props) => {
  if (!props.profile) {
    return (
      <div>
        <div className={style.header}>
          <img
            className={style.headerImage}
            src="https://htmlbook.ru/files/images/layout2/6-05.png"
            width="100%"
            height="auto"
            alt="dsf"
          ></img>
        </div>
        <div className={style.userInfo}>
          <img
            className={style.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Wh6KPhyr7fDJO1Xqhl2xxmPYocqg0lxDnMxjuvk&s"
            alt="sdf"
          ></img>
          Ava + Description
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={style.header}>
          <img
            className={style.headerImage}
            src="https://htmlbook.ru/files/images/layout2/6-05.png"
            width="100%"
            height="auto"
            alt="dsf"
          ></img>
        </div>
        <div className={style.userInfo}>
          <img
            className={style.avatar}
            alt="sdf"
            src={props.profile.photos.small}
          ></img>
          <p className={style.name}>{props.profile.fullName}</p>
          <div className={style.about}>
            <p className={style.description}>{props.profile.aboutMe}</p>
            <div>
              <p className="lookingJob">
                Ищу работу:{" "}
                {props.profile.lookingForAJob
                  ? `${props.profile.lookingForAJobDescription}`
                  : "нет"}
              </p>
            </div>
          </div>
          {/* <ul className={style.contactList}>
          {props.profile.contacts.map((contact) => {
            return(
              <li className="contactItem">{contact}</li>
            )
          })} 
        </ul> */}
        </div>
      </div>
    );
  }
};

export default UserInfo;
