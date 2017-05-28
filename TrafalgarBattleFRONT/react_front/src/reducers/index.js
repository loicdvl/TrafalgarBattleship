import { combineReducers } from 'redux';
import playerReducer from './player-reducer';
import leaderboardReducer from './leaderboard-reducer';
import playerGridReducer from './player-grid-reducer';

let reducers = combineReducers({
    playerState: playerReducer,
    leaderboardState: leaderboardReducer,
    playerGridState: playerGridReducer
});

export default reducers;