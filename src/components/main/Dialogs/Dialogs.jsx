import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let addMessageText = () => {
    props.onAddMessageText()
    newMessageElement.current.value =""
  };

  let onMessageChange = () => {
  let newText = newMessageElement.current.value
  props.onMessageChange(newText)
   
  }

  let dialogsElements = props.dialogsData.map((dialog) => {
    return (
      <li key={dialog.id} className={style.userDialog}>
        <Dialog name={dialog.name} id={dialog.id} ava={dialog.ava} />
      </li>
    );
  });

  let messagesElements = props.messagesData.map((message) => (
    <Message text={message.text} id={message.id} />
  ));


  return (
    <section className={style.dialogs}>
      <ul className={style.dialogsList}>{dialogsElements}</ul>
      <div className={style.messagesArea}>
        <ul className={style.messages}>{messagesElements}</ul>
        <div className={style.sendMessage}>
        <textarea 
          ref={newMessageElement} 
          className={style.textarea} 
          onChange={() => onMessageChange()}
          // value={props.newPostText}
          />
        <button
          className={style.newPostButton}
          onClick={addMessageText}
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
