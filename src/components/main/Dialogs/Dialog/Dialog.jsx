// import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
import DialogAva from "../DialogAva/DialogAva"

const Dialog = (props) => {
  return (
        <>
          <DialogAva src={props.ava}></DialogAva>
          <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </>
  );
};

export default Dialog;
