import React, { Component } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import LoginModal from 'components/Modal/LoginModal';
import InactivityModal from 'components/Modal/InactivityModal';
import {appRoutes, authenticated} from 'routes/app'


class App extends Component {
    constructor( props ) {
        super( props );

        this.loginModal = React.createRef();
        this.inactivityModal = React.createRef();

        this.componentDidMount = this.componentDidMount.bind( this );
        this.handleNotificationClick = this.handleNotificationClick.bind( this );

        this.state = {
            _notificationSystem: null
        };
    }

    
    handleNotificationClick( position ) {
    }
    
    componentDidMount() {
        if(!authenticated()) {
            this.loginModal.current.handleShow();
        }
    }
    
    componentDidUpdate( e ) {
        if ( window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf( 'nav-open' ) !== -1 ) {
            document.documentElement.classList.toggle( 'nav-open' );
        }
    }

    isAuthenticated() {
        //return window.authenticated === true; // JSESSIONID Set-Cookie header problem
        return true;
    }

    render() {
        return (

            <div className="wrapper">
                <Sidebar {...this.props} />
                <div id="main-panel" className="main-panel">
                    <Header {...this.props} />
                    <LoginModal ref={this.loginModal}/>
                    <InactivityModal ref={this.inactivityModal}/>
                         {
                            appRoutes.map(( prop, key ) => {
                                if ( prop.name === "Notifications" )
                                    return (
                                        <Route
                                            path={prop.path}
                                            key={key}
                                            render={routeProps =>
                                                <prop.component
                                                    {...routeProps}
                                                    handleClick={this.handleNotificationClick}
                                                />}
                                        />
                                    );
                                if ( prop.redirect )
                                    return (
                                        <Redirect from={prop.path} to={prop.to} key={key} />
                                    );
                                return (
                                    <Route path={prop.path} render={() => ( ( this.isAuthenticated() ) ? ( <prop.component constructorArgs={prop.constructorArgs} /> ) : ( <Redirect to={{ pathname: '/login' }} /> ) )} key={key} />
                                );
                            } )
                        }
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
