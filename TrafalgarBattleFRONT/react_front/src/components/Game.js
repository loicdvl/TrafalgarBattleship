import React from 'react';
import PlayerGridContainer from './containers/PlayerGridContainer';
import OpponentGridContainer from './containers/OpponentGridContainer';
import '../css/game.css';

class Game extends React.Component {

    render() {
        return (
            <div className="test">
                <div id="placing">
                    <h1>Place tes navires</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 gameSection">
                            <h1>Pseudo 1</h1>
                            <PlayerGridContainer />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 gameSection">
                            <h1>Pseudo 2</h1>
                            <OpponentGridContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;

