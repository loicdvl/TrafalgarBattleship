import React from 'react';

import { Nav, Image } from 'react-bootstrap';

class Header extends React.Component {
    render () {
        return (
            <header>
                <Nav className="navbar navbar-default navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <Image src="../img/oldship.png" id="brand" />
                            </a>
                        </div>
                    </div>
                </Nav>
            </header>
        )
    }
}

export default Header;