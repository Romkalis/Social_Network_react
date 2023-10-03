import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../../redux/messagesReducer";
import { connect } from "react-redux";

let mapsStateToProps = (state) => {
  console.log(state)
  return {
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
  }
}

let mapDispatchToStore = (dispatch) => {
  return {
    onAddMessageText: () => dispatch(addMessageActionCreator()),
    onMessageChange: (newText) => dispatch(updateMessageTextActionCreator(newText)),
  }
}
 
const DialogsContainer = connect(mapsStateToProps, mapDispatchToStore)(Dialogs)

export default DialogsContainer;
