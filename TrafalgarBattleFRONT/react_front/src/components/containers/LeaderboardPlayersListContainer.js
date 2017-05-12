import React from 'react';
import LeaderboardPlayersList from '../views/LeaderboardPlayersList';

import { Table } from 'react-bootstrap';

class LeaderboardPlayersListContainer extends React.Component {
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

export default LeaderboardPlayersListContainer;