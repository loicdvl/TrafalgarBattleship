import { combineReducers } from 'redux';
import playerReducer from './player-reducer';
import leaderboardReducer from './leaderboard-reducer';
import playerGridReducer from './player-grid-reducer';
import opponentGridReducer from './opponent-grid-reducer';

let reducers = combineReducers({
    playerState: playerReducer,
    leaderboardState: leaderboardReducer,
    playerGridState: playerGridReducer,
    opponentGridState: opponentGridReducer
});

export default reducers;