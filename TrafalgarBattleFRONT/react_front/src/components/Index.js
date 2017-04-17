import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Rules from './Rules';
import ModalForm from './ModalForm';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/style.css';

class Index extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <div>
                    <div className="jumbotron text-center" >
                        <div id="blockBtn">
                            <p><a className="btn btn-primary" href="defierJoueur.html" role="button">Commencer une partie</a></p>
                            <p><a className="btn btn-primary" href="leaderboard.html" role="button">Leaderboard</a></p>
                            <br/>
                            <p><a type="button" className="btn btn-primary" data-toggle="modal" data-target="#contactModal">Se connecter</a></p>
                        </div>
                        <a className="glyphicon glyphicon-menu-down" href="#regles" />
                    </div>

                    <div className="test">
                        <div id="elevator_item"><a id="elevator" title="Back To Top"></a></div>

                        <div className="divider"></div>

                        <Rules />
                        <ModalForm />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index;