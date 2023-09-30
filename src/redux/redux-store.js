import {legacy_createStore as createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
})

let store = createStore(reducers)

export default store;