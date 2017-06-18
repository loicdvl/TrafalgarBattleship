import React from 'react';
import { connect } from 'react-redux';

import PlayerGridContainer from './containers/PlayerGridContainer';
import ShotGridContainer from './containers/ShotGridContainer';

import '../css/game.css';

class Game extends React.Component {

    render() {
        return (
            <div className="test">
                <div id="placing">
                    <h1>A l'attaque !</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 gameSection">
                            <h1>{this.props.player.Name}</h1>
                            <PlayerGridContainer />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 gameSection">
                            <h1>{this.props.opponent.Name}</h1>
                            <ShotGridContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.userState.user,
        opponent: store.opponentState.opponent,
        game: store.gameState.game,
        player: store.playerState.player
    };
};

export default connect(mapStateToProps)(Game);

