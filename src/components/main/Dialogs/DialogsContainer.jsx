import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../../redux/messagesReducer";
import StoreContext from "../../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessageText = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (newText) => {
          store.dispatch(updateMessageTextActionCreator(newText));
        };
        return (
          <Dialogs
            onAddMessageText={addMessageText}
            onMessageChange={onMessageChange}
            dialogsData={state.messagesPage.dialogsData}
            messagesData={state.messagesPage.messagesData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
