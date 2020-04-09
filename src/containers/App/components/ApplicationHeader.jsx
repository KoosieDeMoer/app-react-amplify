import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "styles" }]*/
/* styles is used silently */
import styles from './ApplicationHeader.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
                account: window.cache.auth.account,
                menu: false
        };
        this.logout = this.logout.bind(this);

    }
    
    logout() {
        // temp stub
        window.cache.storage.set('access', null);
        window.location.href = "/";
        
    }

   
    
    render(){
         return (
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
                      <NavDropdown.Item onClick={ this.logout }>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
        );
    }
}

export default Header;
