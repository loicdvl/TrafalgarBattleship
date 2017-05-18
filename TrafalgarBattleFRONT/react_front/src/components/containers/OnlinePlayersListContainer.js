import React from 'react';
import OnlinePlayer from '../views/OnlinePlayer';

import { Table } from 'react-bootstrap';


class OnlinePlayersListContainer extends React.Component {
    render() {

        const onlineplayersjson = {
            player1: {
                pseudo: "toto",
                score:51
            },
            player2: {
                pseudo: "toto",
                score:15
            }
        };



        const onlineplayers = Object
            .keys(onlineplayersjson)
            .map(key => <OnlinePlayer key={key} player={onlineplayersjson[key]} />);


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
                <tbody>
                    {onlineplayers}
                </tbody>
            </Table>
        )
    }
}

export default OnlinePlayersListContainer;