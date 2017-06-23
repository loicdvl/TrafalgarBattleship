import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import PlayerGridContainer from './containers/PlayerGridContainer';
import ShotGridContainer from './containers/ShotGridContainer';

import { setShotGrid } from '../api/shotgrid-api';

import { Label, Modal, Button, ProgressBar } from 'react-bootstrap';
import '../css/game.css';

class Game extends React.Component {

    state = {
        turn: false ,
        message: '',
        messageType: '',
        modalMessage: '',
        showModal: false,
        opponentGrid: '',
        playerSuccessfullHit: 0,
        opponentSuccessfullHit: 0,
        shotGridClassName: 'col col-6 col-sm-6 col-md-6 col-lg-6 gameSection',
        opponentDisconnected: false
    };

    updateShotGrid = (ShotGrid) => {
        setShotGrid(ShotGrid);
    };

    componentDidMount() {
        this.props.socket.on('firstToPlay', (isFirstToPlay) => {
            isFirstToPlay ? this.setState({turn: true, message: 'Tire en premier', messageType: 'default'})
                : this.setState({turn: false, message: 'Tu vas te faire attaquer en premier', messageType: 'default', shotGridClassName: 'col col-6 col-sm-6 col-md-6 col-lg-6 opacgameSection'});
        });

        this.props.socket.on('updateShotGridOnMissedShot', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.setState({message: 'Raté..', messageType: 'danger'});
            setTimeout( () => {this.setState({message: ''})}, 3000);
            this.setState({turn: false, shotGridClassName: 'col col-6 col-sm-6 col-md-6 col-lg-6 opacgameSection'});
        });

        this.props.socket.on('updateShotGridOnSuccessfullShot', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.setState({message: 'Touché', messageType: 'success'});
            setTimeout( () => {this.setState({message: ''})}, 3000);
            this.setState({turn: true, playerSuccessfullHit: this.state.playerSuccessfullHit+1});
        });

        this.props.socket.on('updateShotGridOnSunkShip', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.setState({message: 'Coulé', messageType: 'success'});
            setTimeout( () => {this.setState({message: ''})}, 2000);
            this.setState({turn: true, playerSuccessfullHit: this.state.playerSuccessfullHit+1});
        });

        this.props.socket.on('notifyPlayerVictory', (ShotGrid) => {
            this.updateShotGrid(ShotGrid);
            this.openModal();
            this.setState({modalMessage: 'Vous avez Gagné !', turn: false, playerSuccessfullHit: this.state.playerSuccessfullHit+1, shotGridClassName: 'col col-6 col-sm-6 col-md-6 col-lg-6 opacgameSection'});
        });

        this.props.socket.on('notifyPlayerDefeat', () => {
            this.openModal();
            this.setState({modalMessage: 'Vous avez perdu !'});
            this.setState({turn: false, opponentSuccessfullHit: this.state.opponentSuccessfullHit+1, shotGridClassName: 'col col-6 col-sm-6 col-md-6 col-lg-6 opacgameSection'});
        });

        this.props.socket.on('setTurn', (turn) => {
            this.setState({message: 'A votre tour', messageType: 'default', opponentGrid: ''});
            setTimeout( () => {this.setState({message: ''})}, 3000);
            this.setState({turn: true, shotGridClassName: 'col col-6 col-sm-6 col-md-6 col-lg-6 gameSection'});
        });

        this.props.socket.on('notifyHit', (hit) => {
            this.setState({message: 'Votre navire est touché', messageType: 'warning'});
            setTimeout( () => {this.setState({message: ''})}, 3000);
            this.setState({turn: false, opponentSuccessfullHit: this.state.opponentSuccessfullHit+1});
        });

        this.props.socket.on('notifyShipHasBeenSink', () => {
            this.setState({message: 'Votre navire a coulé', messageType: 'danger'});
            setTimeout( () => {this.setState({message: ''})}, 3000);
            this.setState({turn: false, opponentSuccessfullHit: this.state.opponentSuccessfullHit+1});
        });

        this.props.socket.on('notifyOpponentDisconnected', () => {
            this.setState({opponentDisconnected: true});
        });

        this.props.socket.invoke('IsFirstToPlay', this.props.game, this.props.player.ConnectionId);
    }

    openModal = () => {
        this.setState({ showModal : true });
    };

    closeModal = () => {
        this.setState({ showModal : false });
    };

    closeModalOpponentDisconnected = () => {
        this.setState({opponentDisconnected: false});
    };

    redirectToChallengePlayerList = (event) => {
        event.preventDefault();

        this.closeModal();
        browserHistory.push('/challenge-player');
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
                            <ProgressBar active now={100-this.state.opponentSuccessfullHit*(100/17)} />
                            <PlayerGridContainer />
                        </div>
                        <div className={this.state.shotGridClassName}>
                            <h1>{this.props.opponent.Name}</h1>
                            <ProgressBar active now={100-this.state.playerSuccessfullHit*(100/17)} />
                            <ShotGridContainer turn={this.state.turn} />
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.modalMessage}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button onClick={this.redirectToChallengePlayerList} >Faire une autre partie</Button>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.opponentDisconnected} onHide={this.closeModalOpponentDisconnected} >
                    <Modal.Header closeButton>
                        <Modal.Title>Adversaire deconnecté !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button onClick={this.redirectToChallengePlayerList} >Retourner à la liste des joueurs</Button>
                    </Modal.Body>
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

