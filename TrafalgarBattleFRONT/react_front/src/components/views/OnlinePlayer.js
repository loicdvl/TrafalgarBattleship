import React from 'react';

import { Image, Button } from 'react-bootstrap';

class OnlinePlayer extends React.Component {
    render () {
        return (
            <tr>
                <td><Image src="../img/oldship.png" id="brand" /></td>
                <td>{this.props.player.pseudo}</td>
                <td>{this.props.player.score}</td>
                <td><Button bsStyle="primary">Défier</Button></td>
            </tr>
        )
    }
}

export default OnlinePlayer;
