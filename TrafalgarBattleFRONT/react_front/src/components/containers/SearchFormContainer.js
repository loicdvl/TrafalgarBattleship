import React from 'react';
import SearchForm from '../views/SearchForm';
import * as playerApi from '../../api/player-api';


class SearchFormContainer extends React.Component {
    render() {

        let search = (event) => {
            event.preventDefault();

            let query = this.refs.child.getQuery();

            playerApi.searchPlayer(query);
        };

        return (
            <SearchForm search={search} ref="child" />
        )
    }
}

export default SearchFormContainer;