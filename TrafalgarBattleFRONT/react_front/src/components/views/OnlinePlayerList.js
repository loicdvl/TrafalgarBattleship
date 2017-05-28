import React from 'react';

import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router'

class OnlinePlayerList extends React.Component {

    renderOnlinePlayersList() {
        if (this.props.players.length > 1 ){
            return this.props.players.map((players) => {
                return (
                    <tr>
                        <td><Image src={players.Avatar} id="brand" /></td>
                        <td>{players.Name}</td>
                        <td>{players.Victory}</td>
                        <td><Link to="/game/placing-ships"><Button bsStyle="primary">Défier</Button></Link></td>
                    </tr>
                );
            });
        }
        else
        {
            return (
                <tr>
                    <td><Image src={this.props.players.Avatar} id="brand" /></td>
                    <td>{this.props.players.Name}</td>
                    <td>{this.props.players.Victory}</td>
                    <td><Link to="/game/placing-ships"><Button bsStyle="primary">Défier</Button></Link></td>
                </tr>
            )
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