import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Index from './components/Index';
import Leaderboard from './components/Leaderboard';
import ChallengePlayer from './components/ChallengePlayer';
import Game from './components/Game';
import PlacingShips from './components/PlacingShips';
import NotFound from './components/NotFound';

import { BrowserRouter, Match, Miss } from 'react-router';

import './css/bootstrap/css/bootstrap.min.css';


const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Index} />
                <Match pattern="/leaderboard" component={Leaderboard} />
                <Match pattern="/challenge-player" component={ChallengePlayer} />
                <Match pattern="/placing-ships" component={PlacingShips} />
                <Match pattern="/game" component={Game} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
};

ReactDOM.render(
    <Provider />,
    document.getElementById('root')
);
