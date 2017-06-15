import React from 'react';
import { connect } from 'react-redux';

import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router'

import { Table } from 'react-bootstrap';


class OnlineUserListContainer extends React.Component {

    renderOnlineUserList() {
        if (this.props.onlineUsers.length >= 1 ) {
            return this.props.onlineUsers.map((user) => {
                return (
                    <tr key={user.ConnectionId}>
                        <td><Image src={user.Avatar} id="brand" /></td>
                        <td>{user.Name}</td>
                        <td>{(this.props.user.ConnectionId !== user.ConnectionId) ? <Link to="/game/placing-ships"><Button bsStyle="primary">Défier</Button></Link> : null }</td>
                    </tr>
                );
            });
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <Table striped condensed hover>
                <thead>
                <tr>
                    <th/>
                    <th>Joueur</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                    {this.renderOnlineUserList()}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.userState.user,
        onlineUsers: store.onlineUsersState.onlineUsers
    };
};

export default connect(mapStateToProps)(OnlineUserListContainer);