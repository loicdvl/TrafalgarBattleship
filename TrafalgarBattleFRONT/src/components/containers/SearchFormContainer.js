import React from 'react';
import SearchForm from '../views/SearchForm';
import { searchOnlineUser} from '../../api/online-users-api';
import * as leaderboardApi from '../../api/leaderboard-api';


class SearchFormContainer extends React.Component {
    render() {

        let search = (event) => {
            event.preventDefault();

            let query = this.refs.child.getQuery();

            if ( this.props.typeSearch === "PLAYER" )
                searchOnlineUser(query);
            else if (this.props.typeSearch === "LEADERBOARD" )
                leaderboardApi.searchLeaderboard(query);
        };

        return (
            <SearchForm search={search} ref="child" />
        )
    }
}

export default SearchFormContainer;