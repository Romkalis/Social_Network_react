import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../../redux/messagesReducer";


const DialogsContainer = (props) => {
  // debugger
  let newMessageElement = React.createRef();

  let addMessageText = () => {
    props.dispatch(addMessageActionCreator())
  };

  let onMessageChange = (newText) => {
  props.dispatch(updateMessageTextActionCreator(newText))
   
  }


  return (
    <Dialogs 
    onAddMessageText={addMessageText} 
    onMessageChange={onMessageChange} 
    dialogsData={props.state.dialogsData}
    messagesData={props.state.messagesData}
    />
  );
};

export default DialogsContainer;
