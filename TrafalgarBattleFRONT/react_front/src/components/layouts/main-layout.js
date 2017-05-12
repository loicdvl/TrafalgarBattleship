import React from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';

class MainLayout extends React.Component {
    render () {
        var isHome = (window.location.pathname != "/") ? true : false ;
        return (
            <div>
                <Header show={isHome}/>
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default MainLayout;
