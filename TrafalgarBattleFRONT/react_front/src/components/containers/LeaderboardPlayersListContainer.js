import React from 'react';
import { connect } from 'react-redux';
import LeaderboardPlayersList from '../views/LeaderboardPlayersList';
import * as leaderboardAPI from '../../api/leaderboard-api';

import { Table } from 'react-bootstrap';

class LeaderboardPlayersListContainer extends React.Component {

    componentDidMount () {
        leaderboardAPI.getLeaderboard();
    };

    render() {
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
                    <LeaderboardPlayersList leaderboard={this.props.leaderboard} />
                </Table>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        leaderboard: store.leaderboardState.leaderboard
    };
};

export default connect(mapStateToProps)(LeaderboardPlayersListContainer);