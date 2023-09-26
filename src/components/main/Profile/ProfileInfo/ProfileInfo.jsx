import style from "./ProfileInfo.module.css";

const UserInfo = () => {
  return (
    <div>
      <div className={style.header}>
        <img className={style.headerImage}
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
};

export default UserInfo;
