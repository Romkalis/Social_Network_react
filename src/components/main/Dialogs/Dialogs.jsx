import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { mockData } from "../../mock/mock";

const Dialogs = (props) => {
  return (
    <section className={style.dialogs}>
      <ul className={style.dialogsList}>
         
        <Dialog name="Dima" id="1"></Dialog>
        <Dialog name="Roma" id="2"></Dialog>
        <Dialog name="Valery" id="3"></Dialog>
        <Dialog name="Sasha" id="4"></Dialog>
        <Dialog name="Tom" id="5"></Dialog>
        <Dialog name="Jack" id="6"></Dialog>

      </ul>
      <ul className={style.messages}>
        <Message text="Hi"></Message>
        <Message text="How are you"></Message>
        <Message text="i like chicken"></Message>
      </ul>
    </section>
  );
};

export default Dialogs;
