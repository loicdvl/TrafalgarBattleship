import React from 'react';
import { connect } from 'react-redux';

import OnlinePlayerList from '../views/OnlinePlayerList';
import * as playerApi from '../../api/player-api';

import { Table } from 'react-bootstrap';


class OnlinePlayersListContainer extends React.Component {

    componentDidMount() {
        playerApi.getAllPlayers();
    };

    render() {


        return (
            <Table striped condensed hover>
                <thead>
                <tr>
                    <th/>
                    <th>Joueur</th>
                    <th>Score</th>
                    <th/>
                </tr>
                </thead>
                <OnlinePlayerList players={this.props.players} />
            </Table>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        players: store.playerState.players
    };
};

export default connect(mapStateToProps)(OnlinePlayersListContainer);