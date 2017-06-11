import React from 'react';
import { connect } from 'react-redux';

import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router'

class OnlinePlayerList extends React.Component {

    renderOnlineUserList() {
        if (this.props.onlineUsers.length >= 1 ) {
            return this.props.onlineUsers.map((user) => {
                if(user.ConnectionId !== this.props.user.ConnectionId) {
                    return (
                        <tr key={user.ConnectionId}>
                            <td><Image src={user.Avatar} id="brand" /></td>
                            <td>{user.Name}</td>
                            <td><Link to="/game/placing-ships"><Button bsStyle="primary">Défier</Button></Link></td>
                        </tr>
                    );
                }
                else {
                    return null;
                }

            });
        }
        else {
            return null;
        }
    }

    render () {
        return (
            <tbody>
                {this.renderOnlineUserList()}
            </tbody>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.userState.user,
        onlineUsers: store.onlineUsersState.onlineUsers
    };
};

export default connect(mapStateToProps)(OnlinePlayerList);