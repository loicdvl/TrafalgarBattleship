import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-default navbar-static-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">
                                    <img alt="Brand" src="../img/oldship.png" id="brand" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="jumbotron text-center">
                    <div id="header">
                        <h1>Trafalgar Battleship</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;