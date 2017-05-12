import React from 'react';

import { Image } from 'react-bootstrap';

class LeaderboardPlayersList extends React.Component {
    render () {
        return (
            <tr>
                <td><Image src="../../img/oldship.png"/></td>
                <td>{this.props.player.position}</td>
                <td>{this.props.player.pseudo}</td>
                <td>{this.props.player.victory}</td>
                <td>{this.props.player.defeat}</td>
                <td>{this.props.player.total}</td>
            </tr>
        )
    }

    static propTypes = {
        player: React.PropTypes.object.isRequired
    };
}

export default LeaderboardPlayersList;

