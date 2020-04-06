import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown } from 'react-bootstrap';
import LogoutConfirmationModal from 'components/Modal/LogoutConfirmationModal';


class HeaderLinks extends Component{
	
	  constructor(props, context) {
		    super(props, context);
	    
		    this.handleLogout = this.handleLogout.bind(this);
	  }

	  handleLogout() {
		  this.refs.logoutConfirmationModal.handleShow();
	  }

	
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        <i className="fa fa-dashboard"></i>
                        <p className="hidden-lg hidden-md">Dashboard</p>
                    </NavItem>
                    <NavDropdown eventKey={2} title={notification} noCaret id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey={2.1}>Notification 1</NavDropdown.Item>
                        <NavDropdown.Item eventKey={2.2}>Notification 2</NavDropdown.Item>
                        <NavDropdown.Item eventKey={2.3}>Notification 3</NavDropdown.Item>
                        <NavDropdown.Item eventKey={2.4}>Notification 4</NavDropdown.Item>
                        <NavDropdown.Item eventKey={2.5}>Another notifications</NavDropdown.Item>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">
                        <i className="fa fa-search"></i>
                        <p className="hidden-lg hidden-md">Search</p>
                    </NavItem>
                    <NavItem eventKey={4} href="#" onClick={this.handleLogout}>
                    	<i className="fa fa-sign-out"></i>
                    	<p className="hidden-lg hidden-md">Logout</p>
                    </NavItem>
                </Nav>
                <LogoutConfirmationModal ref="logoutConfirmationModal"/>
            </div>
        );
    }
}

export default HeaderLinks;
