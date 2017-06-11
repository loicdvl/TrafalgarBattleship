import React from 'react';
import { connect } from 'react-redux';

import { hubConnection } from 'signalr-no-jquery';

import SearchFormContainer from './containers/SearchFormContainer';
import OnlinePlayerListContainer from './containers/OnlinePlayersListContainer';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';
import {updateOnlineUserList} from "../api/online-users-api";

class ChallengePlayer extends React.Component {
    componentDidMount() {
        const connection = hubConnection('http://localhost:54409');
        const OnlineUserStoreProxy = connection.createHubProxy('OnlineUserStore');

        let user = {
            ConnectionId: 1,
            Rank: 1,
            Avatar: '/img/oldship.png',
            Name: 'Loic',
            Victory: 100,
            Defeat: 0
        };

        connection.start()
            .done(function () { console.log(`Now connected, connection ID=${connection.id}`) })
            .done( () => {
                OnlineUserStoreProxy.invoke('Connect',user);
            });

        OnlineUserStoreProxy.on('updateOnlineUserList', (_connections) => {
            console.log('updateOnlineUserList() called with param',_connections);
            updateOnlineUserList(_connections);
        });
    }

    componentWillUnmount() {
        // disconnect user
        // OnlineUserStoreProxy.invoke('Disconnect',user);
    }

    render() {
        return (
            <div className="test">
                <div id="DefierJoueur">
                    <h1>C'est parti, défie un adversaire !</h1>

                    <SearchFormContainer typeSearch="PLAYER"/>

                    <br/>
                    <div className="bs-example">
                        <OnlinePlayerListContainer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.userState.user,
        onlineUsers: store.onlineUsersState.onlineUsers
    };
};

export default connect (mapStateToProps)(ChallengePlayer);

