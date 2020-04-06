import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ApplicationNavigation from './components/ApplicationNavigationReactBootstrap';
import LoginModal from 'components/Modal/LoginModal';
import InactivityModal from 'components/Modal/InactivityModal';
import { authenticated } from 'routes/app'


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

                <div>
                <ApplicationNavigation />
                <div className="content">
                    <Header  {...this.props}/>
                    <LoginModal ref={this.loginModal}/>
                    <InactivityModal ref={this.inactivityModal}/>
                    <div className="container-fluid">
                        <slot></slot>
                        <Footer  {...this.props}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
