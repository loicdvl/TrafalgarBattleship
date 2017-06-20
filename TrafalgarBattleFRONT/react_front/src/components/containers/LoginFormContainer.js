import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormControl, ControlLabel, InputGroup, Glyphicon, Alert} from 'react-bootstrap';

import { userLoginRequest } from '../../api/user-api';

class LoginFormContainer extends React.Component {

    state = {
        username: '',
        password: '',
        alertAttribute: '',
        alertText: ''
    };

    onChangeUsername = (e) => {
        e.preventDefault();
        this.setState({username: this.inputUsername.value});
    };

    onChangePassword = (e) => {
        e.preventDefault();
        this.setState({password: this.inputPassword.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        if( this.state.username !== '' && this.state.password !== '' )
        {
            userLoginRequest(this.state);
            this.setState({alertAttribute: 'success'});
            this.setState({alertText: 'Connexion réussie !'});
        }
        else
        {
            this.setState({alertAttribute: 'danger'});
            this.setState({alertText: 'Veuillez remplir les champs du formulaire !'});
        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <ControlLabel className="col-md-2 control-label">Pseudo</ControlLabel>
                    <InputGroup className="col-md-10 inputGroupContainer">
                        <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                        <FormControl type="text" inputRef={(ref) => {
                            this.inputUsername = ref;
                        }} onChange={this.onChangeUsername}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <ControlLabel className="col-md-2 control-label">Mot de passe</ControlLabel>
                    <InputGroup className="col-md-10 inputGroupContainer">
                        <InputGroup.Addon><Glyphicon glyph="eye-close"/></InputGroup.Addon>
                        <FormControl type="password" inputRef={(ref) => {
                            this.inputPassword = ref;
                        }} onChange={this.onChangePassword}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Button type="submit" bsStyle="warning">Se connecter</Button>
                </FormGroup>
                <Alert bsStyle={this.state.alertAttribute}>{this.state.alertText}</Alert>
            </Form>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.userState.user
    };
};

export default connect(mapStateToProps)(LoginFormContainer);