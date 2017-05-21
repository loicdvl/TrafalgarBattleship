import React from 'react';
import { connect } from 'react-redux';
import LeaderboardPlayersList from '../views/LeaderboardPlayersList';
import * as playerApi from '../../api/player-api';

import { Table } from 'react-bootstrap';

class LeaderboardPlayersListContainer extends React.Component {

    static componentDidMount () {
        playerApi.getLeaderboard();
    };

    render() {
        const players = {
            player1: {
                position: 1,
                pseudo: "toto",
                victory:10,
                defeat:5,
                total:15
            },
            player2: {
                position: 2,
                pseudo: "toto",
                victory:10,
                defeat:5,
                total:15
            }
        };

        const players2 = Object
            .keys(players)
            .map(key => <LeaderboardPlayersList key={key} player={players[key]} />);

        return (
            <div>
                <Table striped condensed hover>
                    <thead>
                    <tr>
                        <th/>
                        <th>Position</th>
                        <th>Joueur</th>
                        <th>Victoire</th>
                        <th>Défaite</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {players2}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        players: store.playerState.players
    };
};

export default connect(mapStateToProps)(LeaderboardPlayersListContainer);