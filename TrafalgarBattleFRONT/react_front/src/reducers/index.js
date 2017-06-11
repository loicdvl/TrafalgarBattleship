import { combineReducers } from 'redux';
import playerReducer from './player-reducer';
import leaderboardReducer from './leaderboard-reducer';
import playerGridReducer from './player-grid-reducer';
import opponentGridReducer from './opponent-grid-reducer';
import onlineUsersReducer from './online-users-reducers';
import userReducer from './user-reducer';

let reducers = combineReducers({
    playerState: playerReducer,
    leaderboardState: leaderboardReducer,
    playerGridState: playerGridReducer,
    opponentGridState: opponentGridReducer,
    onlineUsersState: onlineUsersReducer,
    userState: userReducer
});

export default reducers;