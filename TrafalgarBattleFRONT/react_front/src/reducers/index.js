import { combineReducers } from 'redux';
import userReducer from './user-reducer';

let reducers = combineReducers({
    userState: userReducer
});

export default reducers;