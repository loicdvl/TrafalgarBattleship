import React from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';

class SearchForm extends React.Component {
    render () {
        return (
            <Form inline>
                <FormControl type="text" placeholder="PseudoJoueur" />
                <Button bsStyle="primary">Rechercher</Button>
                <Button bsStyle="primary">Aléatoire</Button>
            </Form>
        )
    }
}

export default SearchForm;

