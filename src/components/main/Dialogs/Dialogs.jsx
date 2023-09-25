import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = ({ dialogsData, messagesData }) => {

  let dialogsElements = dialogsData.map( (dialog) => <Dialog name={dialog.name} id={dialog.id}></Dialog>)
  let messagesElements = messagesData.map( (message) => <Message text={message.text} id={message.id}></Message>)
  return (
    <section className={style.dialogs}>
      <ul className={style.dialogsList}>
         
         {dialogsElements}

      </ul>
      <ul className={style.messages}>

        {messagesElements}
        
      </ul>
    </section>
  );
};

export default Dialogs;
