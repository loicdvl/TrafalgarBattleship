import React from 'react';

import { Image, Form, FormControl, Table, Button } from 'react-bootstrap';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class Leaderboard extends React.Component {

    render() {
        return (
			<div className="test">
				<div id="DefierJoueur">
					<h1>Leaderboard : Classement des meilleurs joueurs !</h1>
					<Form inline>
						<FormControl type="text" placeholder="PseudoJoueur" />
						<Button bsStyle="primary">Rechercher</Button>
						<Button bsStyle="primary">Mon classement</Button>
					</Form>
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
							<tr>
								<td><Image src="../img/oldship.png"/></td>
								<td>1</td>
								<td>John</td>
								<td>10</td>
								<td>1</td>
								<td>11</td>
							</tr>
							<tr>
								<td><Image src="../img/oldship.png"/></td>
								<td>1</td>
								<td>John</td>
								<td>10</td>
								<td>1</td>
								<td>11</td>
							</tr>
							<tr>
								<td><Image src="../img/oldship.png"/></td>
								<td>1</td>
								<td>John</td>
								<td>10</td>
								<td>1</td>
								<td>11</td>
							</tr>
							<tr>
								<td><Image src="../img/oldship.png"/></td>
								<td>1</td>
								<td>John</td>
								<td>10</td>
								<td>1</td>
								<td>11</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
        )
    }
}

export default Leaderboard;
