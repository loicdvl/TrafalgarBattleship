import React from 'react';

import Header from './Header';
import Footer from './Footer';

import {Jumbotron,Button,ButtonGroup,Modal,Form,FormGroup,FormControl,ControlLabel,InputGroup,Glyphicon,Alert} from 'react-bootstrap';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class Leaderboard extends React.Component {

    render() {
        return (
            <div>
                <Header />

                <Jumbotron className="jumbotron text-center">
					<div id="header">
						<h1>Trafalgar Battleship</h1>
					</div>
				</Jumbotron>
				
				<div className="test">
					<div id="elevator_item"><a id="elevator" onclick="return false;" title="Back To Top"></a></div>
					
					<div id="DefierJoueur">
						<h1>Leaderboard : Classement des meilleurs joueurs !</h1>
						<FormControl className="form-inline">
							<div className="form-group">
								<label className="sr-only" for="PseudoJoueur">PseudoJoueur</label>
								<input type="text" className="form-control" id="PseudoJoueur" placeholder="PseudoJoueur"/>
							</div>
							<button type="submit" className="btn btn-primary">Rechercher</button>
							<button type="submit" className="btn btn-primary">Mon classement</button>
						</FormControl>
						<div className="bs-example">
							<table className="table table-striped">
								<thead>
									<tr>
										<th></th>
										<th>Position</th>
										<th>Joueur</th>
										<th>Victoire</th>
										<th>Défaite</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"/></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"/></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"/></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"/></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				
            </div>
        )
    }
}

export default Leaderboard;
