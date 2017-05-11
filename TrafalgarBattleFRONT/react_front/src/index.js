import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from './components/layouts/main-layout';

import Index from './components/Index';
import Leaderboard from './components/Leaderboard';
import ChallengePlayer from './components/ChallengePlayer';
import Game from './components/Game';
import PlacingShips from './components/PlacingShips';

import { Router, Route, browserHistory } from 'react-router';

import './css/bootstrap/css/bootstrap.min.css';


const Root = () => {
    return (
        <Router history={browserHistory}>
            <Route component={MainLayout}>
                <Route path="/" component={Index} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/challenge-player" component={ChallengePlayer} />
                <Route path="/game/placing-ships/:playerid" component={PlacingShips} />
                <Route path="/game/battle/:playerid" component={Game} />
            </Route>
        </Router>
    )
};

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);