import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    alert(newMessageElement.current.value);
  };

  let dialogsElements = props.state.dialogsData.map((dialog) => {
    return (
      <li key={dialog.id} className={style.userDialog}>
        <Dialog name={dialog.name} id={dialog.id} ava={dialog.ava} />
      </li>
    );
  });

  let messagesElements = props.state.messagesData.map((message) => (
    <Message text={message.text} id={message.id} />
  ));

  return (
    <section className={style.dialogs}>
      <ul className={style.dialogsList}>{dialogsElements}</ul>
      <div className={style.messagesArea}>
        <ul className={style.messages}>{messagesElements}</ul>
        <div className={style.sendMessage}>
        <textarea ref={newMessageElement} className={style.textarea}></textarea>
        <button
          className={style.newPostButton}
          onClick={addMessage}
          type="button"
        >
          New Post
        </button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
