import style from "./DialogAva.module.css";
// import { NavLink } from "react-router-dom";

const DialogAva = ((props) => {
return <img className={style.avatar} src={props.src} alt="avatar" /> })

export default DialogAva