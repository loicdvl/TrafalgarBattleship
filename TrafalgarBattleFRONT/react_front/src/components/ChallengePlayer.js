import React from 'react';

import OnlinePlayersListContainer from './containers/OnlinePlayersListContainer';
import SearchFormContainer from './containers/SearchFormContainer';

import { Form, FormControl, Button, Table, Image } from 'react-bootstrap';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class ChallengePlayer extends React.Component {
    render() {
        return (
            <div className="test">
                <div id="DefierJoueur">
                    <h1>C'est parti, défie un adversaire !</h1>

                    <SearchFormContainer />
                    <Form inline>
                        <FormControl type="text" placeholder="PseudoJoueur" />
                        <Button bsStyle="primary">Rechercher</Button>
                        <Button bsStyle="primary">Aléatoire</Button>
                    </Form>
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
                                <OnlinePlayersListContainer />
                                <tr>
                                    <td><Image src="../img/oldship.png" id="brand" thumbnail /></td>
                                    <td>John</td>
                                    <td>10 000</td>
                                    <td><Button bsStyle="primary">Défier</Button></td>
                                </tr>
                                <tr>
                                    <td><Image src="../img/oldship.png" id="brand" thumbnail /></td>
                                    <td>John</td>
                                    <td>10 000</td>
                                    <td><Button bsStyle="primary">Défier</Button></td>
                                </tr>
                                <tr>
                                    <td><Image src="../img/oldship.png" id="brand" thumbnail /></td>
                                    <td>John</td>
                                    <td>10 000</td>
                                    <td><Button bsStyle="primary">Défier</Button></td>
                                </tr>
                                <tr>
                                    <td><Image src="../img/oldship.png" id="brand" thumbnail /></td>
                                    <td>John</td>
                                    <td>10 000</td>
                                    <td><Button bsStyle="primary">Défier</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChallengePlayer;

