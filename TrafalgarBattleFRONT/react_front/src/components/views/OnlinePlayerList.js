import React from 'react';

import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router'

class OnlinePlayerList extends React.Component {
    render () {
        return (
            <tbody>
                {this.props.players.map(players => {
                    return (
                        <tr>
                            <td><Image src={players.Avatar} id="brand" /></td>
                            <td>{players.Name}</td>
                            <td>50</td>
                            <td><Link to="/game/placing-ships"><Button bsStyle="primary">Défier</Button></Link></td>
                        </tr>
                    );
                })}
            </tbody>
        )
    }
}

export default OnlinePlayerList;