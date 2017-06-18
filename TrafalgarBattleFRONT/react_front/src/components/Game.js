import React from 'react';
import { connect } from 'react-redux';

import PlayerGridContainer from './containers/PlayerGridContainer';
import ShotGridContainer from './containers/ShotGridContainer';

import { setShotGrid } from '../api/shotgrid-api';

import '../css/game.css';

class Game extends React.Component {

    state = {
        turn: false
    };

    updateShotGrid = (ShotGrid) => {
        setShotGrid(ShotGrid);
    };

    componentDidMount() {
        this.props.socket.on('firstToPlay', (isFirstToPlay) => {
            isFirstToPlay ? this.setState({turn: true}) : this.setState({turn: false});
            console.log(this.state.turn);
        });

        this.props.socket.on('updateShotGridOnMissedShot', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.setState({turn: false});
        });

        this.props.socket.on('updateShotGridOnSuccessfullShot', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.setState({turn: true});
        });

        this.props.socket.on('updateShotGridOnSunkShip', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.setState({turn: true});
        });

        this.props.socket.on('notifyPlayerVictory', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            console.log("Bravo t'as gagné");
            this.setState({turn: false});
        });

        this.props.socket.on('notifyPlayerDefeat', () => {
            console.log("T'as perdu looser");
            this.setState({turn: false});
        });

        this.props.socket.on('setTurn', (turn) => {
            this.setState({turn: true});
        });

        this.props.socket.on('notifyHit', (hit) => {
            console.log("un navire a été touché");
            this.setState({turn: false});
        });

        this.props.socket.on('notifyShipHasBeenSink', () => {
            console.log("un navire a été coulé");
            this.setState({turn: false});
        });

        this.props.socket.invoke('IsFirstToPlay', this.props.game, this.props.player.ConnectionId);
    }

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
                            <ShotGridContainer turn={this.state.turn} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        opponent: store.opponentState.opponent,
        game: store.gameState.game,
        player: store.playerState.player,
        socket: store.socketState.socket
    };
};

export default connect(mapStateToProps)(Game);

