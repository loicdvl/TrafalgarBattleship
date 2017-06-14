import React from 'react';
import { connect } from 'react-redux';
import { hubConnection } from 'signalr-no-jquery';

import SearchFormContainer from './containers/SearchFormContainer';
import OnlineUserListContainer from './containers/OnlineUserListContainer';

import { updateOnlineUserList } from "../api/online-users-api";
import { setUser } from '../api/user-api';


import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class ChallengePlayer extends React.Component {
    componentDidMount() {
        // define connection with the signalr websocket server and create hubProxy
        this.connection = hubConnection('http://localhost:54409');
        this.OnlineUserStoreProxy = this.connection.createHubProxy('OnlineUserStore');

        // update list of online users
        this.OnlineUserStoreProxy.on('updateOnlineUserList', (_connections) => {
            updateOnlineUserList(_connections);
        });

        // set user object received from server
        this.OnlineUserStoreProxy.on('setUser',(_user) => {
            setUser(_user);
        });

        // Start connection with the signalr websocket server
        this.connection.start().done( () => {
			// ask to create a new user from pseudo
        this.OnlineUserStoreProxy.invoke('CreateUserFromName',this.props.user.Name);
		});
    }

    componentWillUnmount() {
        // disconnect user from server user list
        this.OnlineUserStoreProxy.invoke('Disconnect',this.props.user.ConnectionId);
    }



    render() {
        return (
            <div className="test">
                <div id="DefierJoueur">
                    <h1>C'est parti, défie un adversaire !</h1>

                    <SearchFormContainer typeSearch="PLAYER"/>

                    <br/>
                    <div className="bs-example">
                        <OnlineUserListContainer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.userState.user
    };
};

export default connect (mapStateToProps)(ChallengePlayer);

