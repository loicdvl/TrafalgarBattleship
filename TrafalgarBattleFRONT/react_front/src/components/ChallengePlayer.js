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
        this.connection = hubConnection('http://localhost:54409');
        this.OnlineUserStoreProxy = this.connection.createHubProxy('OnlineUserStore');

        this.connection.start()
            .done( () => {
                console.log("step 1");
                this.OnlineUserStoreProxy.invoke('CreateUserFromName',this.props.user.Name);
            });

        this.OnlineUserStoreProxy.on('updateOnlineUserList', (_connections) => {
            updateOnlineUserList(_connections);
        });

        this.OnlineUserStoreProxy.on('setUser',(_user) => {
            setUser(_user);
        });
    }

    componentWillUnmount() {
        // disconnect user
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
        user: store.userState.user,
    };
};

export default connect (mapStateToProps)(ChallengePlayer);

