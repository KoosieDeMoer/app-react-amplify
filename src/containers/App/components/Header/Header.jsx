import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
                account: window.cache.auth.account,
                menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.logout = this.logout.bind(this);

    }
    
    logout() {
        // temp stub
        window.cache.storage.set('access', null);
        window.location.href = "/";
        
    }

    /* needed for non-bootstrap dropdown click */
    toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }

    hideMenu(){
        this.setState({ menu: false })
      }

    
    
    render(){
        const show = (this.state.menu) ? "show" : "" ;

        return (
                <Navbar bg="white" expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <li className="nav-item dropdown">
                  <a className="nav-link pr-3 pt-2" href="dummy" role="button">
                      <i className="fa fa-bell text-lg" ></i>
                  </a>
                  </li>
                  
                  {/* without bootstrap */}
                  <li className="nav-item dropdown dropdown-user">
                  <a className="nav-link" href="dummy" role="button" onClick={ this.toggleMenu } onBlur={ this.hideMenu } aria-haspopup="true" aria-expanded="false">
                      <span className="align-middle text-sm d-none d-lg-inline-block">
                          <span className="font-weight-bolder">{this.state.account.fullname}</span><br/>
                          { (this.state.account.role !== undefined && this.state.account.role !== "") && <span className="font-weight-light">{this.state.account.role.title}</span>}
                          </span>
                  </a>
                  <div className={"dropdown-menu dropdown-menu-right " + show}>
                  { this.state.account.company !== undefined && 
                      <>
                      <h6 className="dropdown-header">{ this.state.account.company.name }</h6>
                      <div className="dropdown-divider"></div>
                      </>
                  }
                      <a className="dropdown-item" href="dummy">Non Bootstrap</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item"  href="dummy">Logout</a>
                  </div>
                  </li>

                  
                  
                  
                  {/* with bootstrap */}
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
