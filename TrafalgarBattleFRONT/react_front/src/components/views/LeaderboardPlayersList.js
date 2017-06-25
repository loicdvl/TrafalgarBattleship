import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';

class LeaderboardPlayersList extends React.Component {

    renderLeaderboardList () {
        if (this.props.leaderboard.length >= 1) {
            return this.props.leaderboard.map((user, index) => {
                return (
                    <tr key={index}>
                        <td><Image src="oldship.png"/></td>
                        <td>{index+1}</td>
                        <td>{user.Name}</td>
                        <td>{user.Victory}</td>
                        <td>{user.Defeat}</td>
                        <td>{user.Victory - user.Defeat}</td>
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

const mapStateToProps = function(store) {
    return {
        leaderboard: store.leaderboardState.leaderboard
    };
};

export default connect(mapStateToProps)(LeaderboardPlayersList);

