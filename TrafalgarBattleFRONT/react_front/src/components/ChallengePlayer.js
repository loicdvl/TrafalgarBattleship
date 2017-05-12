import React from 'react';

import OnlinePlayersListContainer from './containers/OnlinePlayersListContainer';
import SearchFormContainer from './containers/SearchFormContainer';

import { Table } from 'react-bootstrap';

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
                        <Table striped condensed hover>
                            <thead>
                                <tr>
                                    <th/>
                                    <th>Joueur</th>
                                    <th>Score</th>
                                    <th/>
                                </tr>
                            </thead>
                            <tbody>
                                <OnlinePlayersListContainer/>
                                <OnlinePlayersListContainer/>
                                <OnlinePlayersListContainer/>
                                <OnlinePlayersListContainer/>
                                <OnlinePlayersListContainer/>
                                <OnlinePlayersListContainer/>
                                <OnlinePlayersListContainer/>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChallengePlayer;

