import React from 'react';

import { Image } from 'react-bootstrap';

class LeaderboardPlayersList extends React.Component {

    renderLeaderboardList () {
        if (this.props.leaderboard.length > 1)
        {
            return this.props.leaderboard.map(player => {
                return (
                    <tr key={player.Rank}>
                        <td><Image src="../../img/oldship.png"/></td>
                        <td>{player.Rank}</td>
                        <td>{player.Name}</td>
                        <td>{player.Victory}</td>
                        <td>{player.Defeat}</td>
                        <td>{player.Victory - player.Defeat}</td>
                    </tr>
                );
            })
        }
        else if(this.props.leaderboard.length === 1)
        {
            return (
                <tr key={this.props.leaderboard.Rank}>
                    <td><Image src="../../img/oldship.png"/></td>
                    <td>{this.props.leaderboard.Rank}</td>
                    <td>{this.props.leaderboard.Name}</td>
                    <td>{this.props.leaderboard.Victory}</td>
                    <td>{this.props.leaderboard.Defeat}</td>
                    <td>{this.props.leaderboard.Victory - this.props.leaderboard.Defeat}</td>
                </tr>
            )
        }
        else
        {
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

