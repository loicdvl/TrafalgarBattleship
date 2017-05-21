import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/layouts/main-layout';

import Index from './components/Index';
import Leaderboard from './components/Leaderboard';
import ChallengePlayer from './components/ChallengePlayer';
import Game from './components/Game';
import PlacingShips from './components/PlacingShips';
import OnlinePlayerListContainer from './components/containers/OnlinePlayersListContainer';


export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Index} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/challenge-player" component={ChallengePlayer}>
                <IndexRoute component={OnlinePlayerListContainer} />
            </Route>
            <Route path="/game/placing-ships" component={PlacingShips} />
            <Route path="/game/battle" component={Game} />
        </Route>
    </Router>
);
