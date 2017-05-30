import React from 'react';

import { Form, FormControl, Button } from 'react-bootstrap';

class SearchForm extends React.Component {

    getQuery = () => {
        return this.input.value;
    };

    render () {
        return (
            <Form onSubmit={this.props.search} inline>
                <Button type="submit" bsStyle="primary">Rechercher</Button>
            </Form>
        )
    }
}

export default SearchForm;

