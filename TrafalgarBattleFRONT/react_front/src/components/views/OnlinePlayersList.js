import React from 'react';

import { Image, Button } from 'react-bootstrap';

class OnlinePlayersList extends React.Component {
    render () {
        return (
            <tr>
                <td><Image src="../img/oldship.png" id="brand" thumbnail /></td>
                <td>Papi</td>
                <td>10 000</td>
                <td><Button bsStyle="primary">Défier</Button></td>
            </tr>
        )
    }
}

export default OnlinePlayersList;
