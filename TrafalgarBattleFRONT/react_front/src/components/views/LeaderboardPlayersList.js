import React from 'react';

import { Image } from 'react-bootstrap';

class LeaderboardPlayersList extends React.Component {

    renderLeaderboardList () {
        if (this.props.leaderboard.length >= 1) {
            return this.props.leaderboard.map(player => {
                return (
                    <tr key={player.ConnectionId}>
                        <td><Image src="oldship.png"/></td>
                        <td>{player.Rank}</td>
                        <td>{player.Name}</td>
                        <td>{player.Victory}</td>
                        <td>{player.Defeat}</td>
                        <td>{player.Victory - player.Defeat}</td>
                    </tr>
                );
            })
        }
        else {
            return null;
        }
    }

    render () {
        return (
            <tbody>
                {this.renderLeaderboardList()}
            </tbody>
        )
    }
}

export default LeaderboardPlayersList;

