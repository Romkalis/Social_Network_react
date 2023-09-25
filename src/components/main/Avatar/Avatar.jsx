import style from "./Avatar.module.css";
// import { NavLink } from "react-router-dom";

const Avatar = (props) => {
  console.log(props)
  return (
    <span className="">
            <img className={style.avatar} src={props.src} alt="avatar" />
    </span>
  );
};

export default Avatar;
