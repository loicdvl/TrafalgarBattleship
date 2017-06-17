import React from 'react';
import {Button,Form,FormGroup,FormControl,ControlLabel,InputGroup,Glyphicon} from 'react-bootstrap';

class SignupPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onChange = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <Form vertical onSubmit={this.onSubmit}>
                <FormGroup>
                    <ControlLabel className="col-md-2 control-label">Pseudo</ControlLabel>
                    <InputGroup className="col-md-10 inputGroupContainer">
                        <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                        <FormControl type="text" name="username" value={this.state.username} onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <ControlLabel className="col-md-2 control-label">E-mail</ControlLabel>
                    <InputGroup className="col-md-10 inputGroupContainer">
                        <InputGroup.Addon><Glyphicon glyph="envelope"/></InputGroup.Addon>
                        <FormControl type="text" name="email" value={this.state.email} onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <ControlLabel className="col-md-2 control-label">Mot de passe</ControlLabel>
                    <InputGroup className="col-md-10 inputGroupContainer">
                        <InputGroup.Addon><Glyphicon glyph="eye-close"/></InputGroup.Addon>
                        <FormControl type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Button type="submit" bsStyle="warning">S'inscrire</Button>
                </FormGroup>
            </Form>

        );
    }
}

export default SignupPage;
