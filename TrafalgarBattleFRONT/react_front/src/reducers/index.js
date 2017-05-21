import { combineReducers } from 'redux';
import playerReducer from './player-reducer';

let reducers = combineReducers({
    playerState: playerReducer
});

export default reducers;