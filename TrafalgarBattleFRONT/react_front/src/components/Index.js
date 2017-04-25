import React from 'react';

import Footer from './Footer';
import Rules from './Rules';
import {Jumbotron,Button,ButtonGroup,Modal,Form,FormGroup,FormControl,ControlLabel,InputGroup,Glyphicon,Alert} from 'react-bootstrap';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class Index extends React.Component {

    state = {
        showModalSignUp: false,
        showModalSignIn: false
    };

    openModalSignUp = () => {
        this.setState({ showModalSignUp : true });
    };

    closeModalSignUp = () => {
        this.setState({ showModalSignUp : false });
    };

    openModalSignIn = () => {
        this.setState({ showModalSignIn : true });
    };

    closeModalSignIn = () => {
        this.setState({ showModalSignIn : false });
    };

    goToChallengePlayer = event => {
        event.preventDefault();
        this.context.router.transitionTo('/challenge-player');
    };

    goToLeaderboard = event => {
        event.preventDefault();
        this.context.router.transitionTo('/leaderboard');
    };

    render () {
        return (
            <div>
                <Jumbotron className="jumbotron text-center">
                    <div id="header">
                        <h1>Trafalgar Battleship</h1>
                        <h2>Bienvenue</h2>
                    </div>
                    <ButtonGroup vertical>
                        <Button bsStyle="primary" bsSize="large" onClick={e => this.goToChallengePlayer(e)} block>Commencer une partie</Button>
                        <br/>
                        <Button bsStyle="primary" bsSize="large" onClick={e => this.goToLeaderboard(e)} block>Leaderboard</Button>
                        <br/>
                        <Button bsStyle="primary" bsSize="large" onClick={this.openModalSignIn} block>Se connecter</Button>
                        <br/>
                        <Button bsStyle="primary" bsSize="large" onClick={this.openModalSignUp} block>S'inscrire</Button>
                        <br/>
                    </ButtonGroup>
                    <br/>
                    <a className="glyphicon glyphicon-menu-down" href="#regles" />
                </Jumbotron>

                <div className="test">
                    <div id="elevator_item"><a id="elevator" title="Back To Top" /></div>

                    <div className="divider" />

                    <Rules />
                    <Modal show={this.state.showModalSignUp} onHide={this.closeModalSignUp}>
                        <Modal.Header closeButton>
                            <Modal.Title>Inscription</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form vertical>
                                <FormGroup>
                                    <ControlLabel className="col-md-2 control-label">Pseudo</ControlLabel>
                                    <InputGroup className="col-md-10 inputGroupContainer">
                                        <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                                        <FormControl type="text" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel className="col-md-2 control-label">E-mail</ControlLabel>
                                    <InputGroup className="col-md-10 inputGroupContainer">
                                        <InputGroup.Addon><Glyphicon glyph="envelope"/></InputGroup.Addon>
                                        <FormControl type="text" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel className="col-md-2 control-label">E-mail</ControlLabel>
                                    <InputGroup className="col-md-10 inputGroupContainer">
                                        <InputGroup.Addon><Glyphicon glyph="envelope"/></InputGroup.Addon>
                                        <FormControl type="text" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel className="col-md-2 control-label">Mot de passe</ControlLabel>
                                    <InputGroup className="col-md-10 inputGroupContainer">
                                        <InputGroup.Addon><Glyphicon glyph="eye-close"/></InputGroup.Addon>
                                        <FormControl type="password" />
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                            <Alert bsStyle="success">Inscription réussie</Alert>
                            <Button type="submit" bsStyle="warning">S'inscrire</Button>
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.showModalSignIn} onHide={this.closeModalSignIn}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connexion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form vertical>
                                <FormGroup>
                                    <ControlLabel className="col-md-2 control-label">Pseudo</ControlLabel>
                                    <InputGroup className="col-md-10 inputGroupContainer">
                                        <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                                        <FormControl type="text" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel className="col-md-2 control-label">Mot de passe</ControlLabel>
                                    <InputGroup className="col-md-10 inputGroupContainer">
                                        <InputGroup.Addon><Glyphicon glyph="eye-close"/></InputGroup.Addon>
                                        <FormControl type="password" />
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                            <Alert bsStyle="success">Connexion réussie</Alert>
                            <Button type="submit" bsStyle="warning">Se connecter</Button>
                            <br/><br/><br/>
                            <ButtonGroup vertical>
                                <Button type="submit" bsStyle="primary" block>Facebook</Button><br/>
                                <Button type="submit" bsStyle="primary" block>Twitter</Button>
                            </ButtonGroup>
                        </Modal.Body>
                    </Modal>
                </div>
                <Footer />
            </div>
        );
    }

    static contextTypes = {
        router: React.PropTypes.object
    };
}

export default Index;