import React from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';

class SearchForm extends React.Component {
    getQuery = () => {
        return this.refs.search.value;
    };

    render () {
        return (
            <Form onSubmit={this.props.search} inline>
                <FormControl type="text" ref="search" placeholder="PseudoJoueur" />
                <Button bsStyle="primary">Rechercher</Button>
                <Button bsStyle="primary">Aléatoire</Button>
            </Form>
        )
    }
}

export default SearchForm;

