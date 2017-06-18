import React from 'react';
import {Button,Form,FormGroup,FormControl,ControlLabel,InputGroup,Glyphicon} from 'react-bootstrap';

import { userSignupRequest } from '../../api/user-api';

class SignupFormContainer extends React.Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    onChangeUsername = (e) =>{
        e.preventDefault();
        this.setState({ username: this.inputUsername.value });
    }

    onChangeEmail = (e) =>{
        e.preventDefault();
        this.setState({ email: this.inputEmail.value });
    }

    onChangePassword = (e) =>{
        e.preventDefault();
        this.setState({ password: this.inputPassword.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

    render() {
        return (
            <Form vertical onSubmit={this.onSubmit}>
                <FormGroup>
                    <ControlLabel className="col-md-2 control-label">Pseudo</ControlLabel>
                    <InputGroup className="col-md-10 inputGroupContainer">
                        <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                        <FormControl type="text" inputRef={(ref) => {this.inputUsername = ref;}} onChange={this.onChangeUsername}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <ControlLabel className="col-md-2 control-label">E-mail</ControlLabel>
                    <InputGroup className="col-md-10 inputGroupContainer">
                        <InputGroup.Addon><Glyphicon glyph="envelope"/></InputGroup.Addon>
                        <FormControl type="text" inputRef={(ref) => {this.inputEmail = ref;}} onChange={this.onChangeEmail}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <ControlLabel className="col-md-2 control-label">Mot de passe</ControlLabel>
                    <InputGroup className="col-md-10 inputGroupContainer">
                        <InputGroup.Addon><Glyphicon glyph="eye-close"/></InputGroup.Addon>
                        <FormControl type="password" inputRef={(ref) => {this.inputPassword = ref;}} onChange={this.onChangePassword}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Button type="submit" bsStyle="warning">S'inscrire</Button>
                </FormGroup>
            </Form>

        );
    }
}

SignupFormContainer.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupFormContainer;
