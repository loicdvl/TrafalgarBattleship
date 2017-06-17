import React from 'react';
import {Button,ButtonGroup,Modal,Form,FormGroup,FormControl,ControlLabel,InputGroup,Glyphicon,Alert} from 'react-bootstrap';

class SignupPage extends React.Component {
    render() {
        return (
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
        );
    }
}

export default SignupPage;
