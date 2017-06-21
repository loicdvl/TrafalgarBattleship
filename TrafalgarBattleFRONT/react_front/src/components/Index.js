import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Jumbotron, Button, ButtonGroup, Modal } from 'react-bootstrap';

import SignupFormContainer from "./containers/SignupFormContainer";
import LoginFormContainer from "./containers/LoginFormContainer";

import Rules from './views/Rules';

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

    render () {

        return (
            <div>
                <Jumbotron className="jumbotron text-center">
                    <div id="header">
                        <h1>Trafalgar Battleship</h1>
                        <h2>Bienvenue</h2>
                    </div>
                    <ButtonGroup vertical>
                        <Link to="/challenge-player"><Button bsStyle="primary" bsSize="large" block>Commencer une partie</Button></Link>
                        <br/>
                        <Link to="/leaderboard"><Button bsStyle="primary" bsSize="large" block>Leaderboard</Button></Link>
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

                    <div className="divider" />

                    <Rules />
                    <Modal show={this.state.showModalSignUp} onHide={this.closeModalSignUp}>
                        <Modal.Header closeButton>
                            <Modal.Title>Inscription</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <SignupFormContainer />
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.showModalSignIn} onHide={this.closeModalSignIn}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connexion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <LoginFormContainer />
                        </Modal.Body>
                    </Modal>
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

export default connect(mapStateToProps)(Index);