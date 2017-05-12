import React from 'react';

import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router'

class OnlinePlayer extends React.Component {
    render () {
        return (
            <tr>
                <td><Image src="../img/oldship.png" id="brand" /></td>
                <td>{this.props.player.pseudo}</td>
                <td>{this.props.player.score}</td>
                <td><Link to="/game/placing-ships"><Button bsStyle="primary">Défier</Button></Link></td>
            </tr>
        )
    }
}

export default OnlinePlayer;
