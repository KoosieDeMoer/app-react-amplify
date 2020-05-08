import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import SpaceTime from 'spacetime'

import ApplicationHeader from './components/ApplicationHeader';
import ApplicationFooter from './components/ApplicationFooter';
import ApplicationNavigation from './components/ApplicationNavigation';
import WaitIndicator from 'components/Global/WaitIndicator';
import LoginModal from 'components/Modal/LoginModal';
import InactivityModal from 'components/Modal/InactivityModal';
import { authenticated, appRoutes } from 'routes/app'

import './App.css';



class App extends Component {
    constructor( props ) {
        super( props );

        this.loginModal = React.createRef();
        this.inactivityModal = React.createRef();

        this.componentDidMount = this.componentDidMount.bind( this );

        this.state = {
            _notificationSystem: null
        };
        
        window.LocalDate = function(args) {
            return SpaceTime(args, 'UTC').goto(SpaceTime('now').timezone().name)
        }

        window.APIDate = function(args) {
            return SpaceTime(args, 'UTC')
        }
        

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

                <>
                <WaitIndicator/>
                <ApplicationHeader  {...this.props} />
                <ApplicationNavigation {...this.props} />
                <div className="content">

                    <LoginModal ref={this.loginModal}/>
                    <InactivityModal ref={this.inactivityModal} />
                    <div className="space-for-header"></div>	
                    <div className="container-fluid" >
                        <Switch>
                        {
                            appRoutes.map(( prop, key ) => {
                                if ( prop.redirect )
                                    return (
                                            <Redirect from={prop.path} to={prop.to} key={key} />
                                    );
                                return (
                                        <Route path={prop.path} component={prop.component} key={key} />
                                );
                            } )
                        }
                        </Switch>
                        <slot></slot>
                        <ApplicationFooter  {...this.props} />
                    </div>
                </div>
            </>
        );
    }
}

export default App;
