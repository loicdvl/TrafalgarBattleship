import React from 'react';
import { connect } from 'react-redux';

import OnlineUserList from '../views/OnlineUserList';

import { Table } from 'react-bootstrap';


class OnlineUserListContainer extends React.Component {

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
                <OnlineUserList />
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