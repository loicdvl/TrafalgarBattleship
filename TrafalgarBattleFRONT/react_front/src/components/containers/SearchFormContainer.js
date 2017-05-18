import React from 'react';
import SearchForm from '../views/SearchForm';
import * as userApi from '../../api/userApi';


class SearchFormContainer extends React.Component {
    render() {

        let search = (event) => {
            event.preventDefault();

            let query = this.refs.child.getQuery();

            userApi.searchUsers(query);
        };

        return (
            <SearchForm search={search} ref="child" />
        )
    }
}

export default SearchFormContainer;