import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl'

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "styles" }]*/
/* styles is used silently */
import styles from './ApplicationHeader.css';

import PageTitle from 'components/Elements/PageTitle';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
                account: window.cache.auth.account,
                menu: false
        };
        
        this.titlePageRef = new React.createRef();
         
        this.logout = this.logout.bind(this);

    }
    
    componentDidMount() {
        // TODO put in a normal ReactJS location
        window.titlePage = this.titlePageRef.current;;

    }

    logout() {
        // temp stub
        window.cache.storage.set('access', null);
        window.cache.storage.set('account', null);

        // TODO proper route mechanism
        window.location.href = "/";
        
    }

   
    
    render(){
         return (
            <div>
                <Navbar className="shadow-vivid fixed-top" id="navbar-main">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="justify-content-end" style={{ width: "100%" }}>
                
                  
                    <NavDropdown title={
                            <span className="align-middle text-sm d-none d-lg-inline-block">
                            <span className="font-weight-bolder">{this.state.account.fullname}</span><br/>
                            { (this.state.account.role !== undefined && this.state.account.role !== "") && <span className="font-weight-light">{this.state.account.role.title}</span>}
                        </span>
                        } id="basic-nav-dropdown">
                    { this.state.account.company !== undefined && 
                        <>
                        <NavDropdown.Item>{ this.state.account.company.name }</NavDropdown.Item>
                        <NavDropdown.Divider />
                        </>
                    }
                      <NavDropdown.Item href="#action/3.2">Bootstrap</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={ this.logout }>
                          <FormattedMessage
                              id="logout"
                          />
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div className="container-fluid bg-secondary pb-2" style={{position : "absolute", marginTop: "80px"}}>
              <div className="row">
                  <div className="col-12">
                      <PageTitle ref={this.titlePageRef} className="mt-5 pt-5" />
                  </div>
              </div>
              </div>
          </div>

        );
    }
}

export default Header;
