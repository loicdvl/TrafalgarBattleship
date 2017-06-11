import React from 'react';

import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router'

class OnlinePlayerList extends React.Component {

    renderOnlinePlayersList() {
        if (this.props.players.length > 1 ){
            return this.props.players.map((player) => {
                return (
                    <tr key={player.Name}>
                        <td><Image src={player.Avatar} id="brand" /></td>
                        <td>{player.Name}</td>
                        <td>{player.Victory}</td>
                        <td><Link to="/game/placing-ships"><Button bsStyle="primary">Défier</Button></Link></td>
                    </tr>
                );
            });
        }
        else if (this.props.players.length === 1)
        {
            return (
                <tr key={this.props.players.Name}>
                    <td><Image src={this.props.players.Avatar} id="brand" /></td>
                    <td>{this.props.players.Name}</td>
                    <td>{this.props.players.Victory}</td>
                    <td><Link to="/game/placing-ships"><Button bsStyle="primary">Défier</Button></Link></td>
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
                {this.renderOnlinePlayersList()}
            </tbody>
        )
    }
}

export default OnlinePlayerList;