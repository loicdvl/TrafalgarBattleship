import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { hubConnection } from 'signalr-no-jquery';
import { Modal, Button } from "react-bootstrap";

import SearchFormContainer from './containers/SearchFormContainer';
import OnlineUserListContainer from './containers/OnlineUserListContainer';

import { updateOnlineUserList } from "../api/online-users-api";
import { setUser } from '../api/user-api';
import { setSocket } from '../api/socket-api';
import { setGame } from '../api/game-api';
import { setPlayer} from '../api/player-api';
import { setOpponent } from '../api/opponent-api';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class ChallengePlayer extends React.Component {
    state = {
        showModalOnWaitForDefiedResponse: false,
        showModalOnBeingDefied: false,
        opponent: this.props.opponent
    };

    openModalOnBeingDefied = (opponent) => {
        this.setState({opponent});
        this.setState({ showModalOnBeingDefied : true });
    };

    openModalOnWaitForDefiedResponse = (opponent) => {
        this.setState({opponent});
        this.setState({ showModalOnWaitForDefiedResponse : true });
    };

    closeModalModalOnWaitForDefiedResponse = () => {
        this.setState({ showModalOnWaitForDefiedResponse : false });
    };

    closeModalOnBeingDefied = () => {
        this.setState({ showModalOnBeingDefied : false });
    };

    challengeAccepted = () => {
        this.closeModalOnBeingDefied();
        this.props.socket.invoke('ChallengeAccepted', this.props.user.ConnectionId, this.state.opponent.ConnectionId);
    };

    challengeDeclined = () => {
        this.closeModalOnBeingDefied();
        this.props.socket.invoke('ChallengeDeclined', this.props.user.ConnectionId, this.state.opponent.ConnectionId);
    };

    escapeFromThisTrap = () => {
        this.closeModalModalOnWaitForDefiedResponse();
        this.props.invoke('ChallengeUserAbort',this.props.opponent.ConnectionId);
    };

    componentDidMount() {
        this.connection = hubConnection('http://localhost:54409');
        this.OnlineUserStoreProxy = this.connection.createHubProxy('OnlineUserStore');

        this.OnlineUserStoreProxy.on('updateOnlineUserList', (_connections) => {
            updateOnlineUserList(_connections);
        });

        this.OnlineUserStoreProxy.on('setUser',(_user) => {
            setUser(_user);
        });

        this.OnlineUserStoreProxy.on('defied', (_user) => {
            this.openModalOnBeingDefied(_user);
        });

        this.OnlineUserStoreProxy.on('waitingForResponse', (opponent) => {
            this.openModalOnWaitForDefiedResponse(opponent);
        });

        this.OnlineUserStoreProxy.on('displayDeniedChallenge', () => {
            this.closeModalModalOnWaitForDefiedResponse();
        });

        this.OnlineUserStoreProxy.on('startGame', (game,player,challenger) => {
            setGame(game);
            setPlayer(player);
            setOpponent(challenger);
            browserHistory.push('/game/placing-ships');
        });

        this.connection.start().done( () => {
            setSocket(this.OnlineUserStoreProxy);
            this.OnlineUserStoreProxy.invoke('CreateUserFromName',this.props.user.Name);
		});
    }

    componentWillUnmount() {
        this.OnlineUserStoreProxy.invoke('Disconnect',this.props.user.ConnectionId);
    }

    render() {
        return (
            <div className="test">
                <div id="DefierJoueur">
                    <h1>C'est parti, défie un adversaire !</h1>

                    <SearchFormContainer typeSearch="PLAYER"/>

                    <br/>
                    <div className="bs-example">
                        <OnlineUserListContainer />
                    </div>

                    <Modal show={this.state.showModalOnBeingDefied} onHide={this.challengeDeclined}>
                        <Modal.Header closeButton>
                            <Modal.Title>Défi</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Une flotte de navire dirigée par l'amiral {this.state.opponent.Name} vous met au défi de la couler !
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="danger" onClick={this.challengeAccepted}>A l'attaque !</Button>
                            <Button bsStyle="warning" onClick={this.challengeDeclined}>S'enfuir !</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.showModalOnWaitForDefiedResponse} onHide={this.escapeFromThisTrap}>
                        <Modal.Header closeButton>
                            <Modal.Title>Défi</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            En attente de réponse de l'adversaire !
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="danger" onClick={this.escapeFromThisTrap}>Abandonner</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.userState.user,
        opponent: store.opponentState.opponent,
        socket: store.socketState.socket
    };
};

export default connect (mapStateToProps)(ChallengePlayer);

