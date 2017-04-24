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

			    <!-- Défier un joueur -->
                <Jumbotron className="jumbotron text-center">
					<div id="header">
						<h1>Trafalgar Battleship</h1>
					</div>
				</Jumbotron>
				
				<div class="test">
					<!-- Bouton back to top -->
					<div id="elevator_item"><a id="elevator" onclick="return false;" title="Back To Top"></a></div>
					
					<div id="DefierJoueur">
						<h1>Leaderboard : Classement des meilleurs joueurs !</h1>
						<!-- Formulaire de recherche de joueur -->
						<<FormControl className="form-inline">
							<div class="form-group">
								<label class="sr-only" for="PseudoJoueur">PseudoJoueur</label>
								<input type="text" class="form-control" id="PseudoJoueur" placeholder="PseudoJoueur">
							</div>
							<button type="submit" class="btn btn-primary">Rechercher</button>
							<button type="submit" class="btn btn-primary">Mon classement</button>
						</<FormControl>
						<!-- Tableau des joueurs en ligne -->
						<div class="bs-example">
							<table class="table table-striped">
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
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
										<td>1</td>
										<td>John</td>
										<td>10</td>
										<td>1</td>
										<td>11</td>
									</tr>
									<tr>
										<td><img alt="Brand" src="img/oldship.png" id="brand"></td>
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
				
			    <!-- pied de page -->
			    <footer>
			        <div class="footer-info">
			            <div class="footer-brand">
			                <p> Loïc DEVOILLE & Lucie SEURIN</p>
							<p>2016-2017 M1 Miage Apprentissage</p>
			            </div>
			        </div>
			    </footer>
            </div>
        )
    }
}

export default Leaderboard;
