import React from 'react';
import { connect } from 'react-redux';

import PlayerGridContainer from './containers/PlayerGridContainer';
import ShotGridContainer from './containers/ShotGridContainer';

import { setShotGrid } from '../api/shotgrid-api';

import {Label, Modal} from 'react-bootstrap';
import '../css/game.css';

class Game extends React.Component {

    state = {
        turn: false ,
        message: '',
        messageType: '',
        showModal: false
    };

    updateShotGrid = (ShotGrid) => {
        setShotGrid(ShotGrid);
    };

    componentDidMount() {
        this.props.socket.on('firstToPlay', (isFirstToPlay) => {
            isFirstToPlay ? this.setState({turn: true, message: 'Tire en premier', messageType: 'default'}) : this.setState({turn: false, message: 'Tu vas te faire attaquer en premier', messageType: 'default'});
            console.log(this.state.turn);
        });

        this.props.socket.on('updateShotGridOnMissedShot', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.setState({message: 'Raté..', messageType: 'danger'});
            this.setState({turn: false});
        });

        this.props.socket.on('updateShotGridOnSuccessfullShot', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            setTimeout(() => this.setState({message: 'Touché', messageType: 'success'}), 1000);
            this.setState({turn: true});
        });

        this.props.socket.on('updateShotGridOnSunkShip', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.setState({message: 'Coulé', messageType: 'success'});
            this.setState({turn: true});
        });

        this.props.socket.on('notifyPlayerVictory', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            console.log("Bravo t'as gagné");
            this.openModal();
            this.setState({message: 'Gagné !'});
            this.setState({turn: false});
        });

        this.props.socket.on('notifyPlayerDefeat', () => {
            console.log("T'as perdu looser");
            this.openModal();
            this.setState({message: 'Perdu !'});
            this.setState({turn: false});
        });

        this.props.socket.on('setTurn', (turn) => {
            this.setState({message: 'A votre tour', messageType: 'default'});
            this.setState({turn: true});
        });

        this.props.socket.on('notifyHit', (hit) => {
            this.setState({message: 'Votre navire est touché', messageType: 'warning'});
            this.setState({turn: false});
        });

        this.props.socket.on('notifyShipHasBeenSink', () => {
            this.setState({message: 'Votre navire a coulé', messageType: 'danger'});
            this.setState({turn: false});
        });

        this.props.socket.invoke('IsFirstToPlay', this.props.game, this.props.player.ConnectionId);

    }

    openModal = () => {
        this.setState({ showModal : true });
    };

    closeModal = () => {
        this.setState({ showModal : false });
    };

    render() {
        return (
            <div className="test">
                <div id="placing">
                    <h1>A l'attaque !</h1>
                    <Label bsStyle={this.state.messageType}>{this.state.message}</Label>
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
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.message}</Modal.Title>
                    </Modal.Header>
                </Modal>
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

