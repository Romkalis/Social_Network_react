import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map((dialog) => {
    return (
      <li key={dialog.id} className={style.dialog}>
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
      <ul className={style.messages}>{messagesElements}</ul>
    </section>
  );
};

export default Dialogs;
