import React from 'react';

import { Image } from 'react-bootstrap';

class LeaderboardPlayersList extends React.Component {
    render () {
        return (
            <tr>
                <td><Image src="../img/oldship.png"/></td>
                <td>1</td>
                <td>John</td>
                <td>10</td>
                <td>1</td>
                <td>11</td>
            </tr>
        )
    }
}

export default LeaderboardPlayersList;

