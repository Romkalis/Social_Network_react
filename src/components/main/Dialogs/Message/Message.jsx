import style from "./Message.module.css";

const Message = (props) => {
  return (
        <li className={style.message}>{props.text}</li>
  );
};

export default Message;
