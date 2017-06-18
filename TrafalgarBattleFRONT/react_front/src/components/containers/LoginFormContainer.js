import React from 'react';
import {Button,Form,FormGroup,FormControl,ControlLabel,InputGroup,Glyphicon} from 'react-bootstrap';

import { userLoginRequest } from '../../api/user-api';

class LoginFormContainer extends React.Component {

    state = {
        username: '',
        password: ''
    }

    onChangeUsername = (e) => {
        e.preventDefault();
        this.setState({username: this.inputUsername.value});
    }

    onChangePassword = (e) => {
        e.preventDefault();
        this.setState({password: this.inputPassword.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.userLoginRequest(this.state);
    }

    render() {
        return (
            <Form vertical onSubmit={this.onSubmit}>
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
            </Form>
        );
    }
}

export default LoginFormContainer;