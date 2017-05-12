import React from 'react';

import { Form, FormControl, Table, Button } from 'react-bootstrap';

import LeaderboardPlayersListContainer from './containers/LeaderboardPlayersListContainer';
import SearchFormContainer from './containers/SearchFormContainer';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class Leaderboard extends React.Component {

    render() {
        return (
			<div className="test">
				<div id="DefierJoueur">
					<h1>Leaderboard : Classement des meilleurs joueurs !</h1>

					<SearchFormContainer/>
					<br/>
					<Table striped condensed hover>
						<thead>
							<tr>
								<th/>
								<th>Position</th>
								<th>Joueur</th>
								<th>Victoire</th>
								<th>Défaite</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<LeaderboardPlayersListContainer/>
							<LeaderboardPlayersListContainer/>
							<LeaderboardPlayersListContainer/>
							<LeaderboardPlayersListContainer/>
							<LeaderboardPlayersListContainer/>
						</tbody>
					</Table>
				</div>
			</div>
        )
    }
}

export default Leaderboard;
