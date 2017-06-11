import { combineReducers } from 'redux';
import leaderboardReducer from './leaderboard-reducer';
import playerGridReducer from './player-grid-reducer';
import opponentGridReducer from './opponent-grid-reducer';
import onlineUsersReducer from './online-users-reducers';
import userReducer from './user-reducer';
import opponentReducer from './opponent-reducer';

let reducers = combineReducers({
    leaderboardState: leaderboardReducer,
    playerGridState: playerGridReducer,
    opponentGridState: opponentGridReducer,
    onlineUsersState: onlineUsersReducer,
    userState: userReducer,
    opponentState: opponentReducer
});

export default reducers;