import React from 'react';

import OnlinePlayersListContainer from './containers/OnlinePlayersListContainer';
import SearchFormContainer from './containers/SearchFormContainer';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class ChallengePlayer extends React.Component {
    render() {
        return (
            <div className="test">
                <div id="DefierJoueur">
                    <h1>C'est parti, défie un adversaire !</h1>

                    <SearchFormContainer/>

                    <br/>
                    <div className="bs-example">
                        <OnlinePlayersListContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChallengePlayer;

