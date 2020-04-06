import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class LogoutConfirmationModal extends React.Component {
	  constructor(props, context) {
	    super(props, context);

 
	    this.handleShow = this.handleShow.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleExit = this.handleExit.bind(this);

	    this.state = {
	      show: false
	    };
	  }


  
	  handleSubmit() {
		  this.refs.errorZone.innerHTML = "&nbsp;";
		  // TODO logout via WebApi
		  
	  }

	  
	  handleClose() {
	    this.setState({ show: false });
	  }

	  handleShow() {
	    this.setState({ show: true });
	  }

	  handleExit() {
		    this.setState({ show: false });
	  }

	  render() {

	    return (
	      <div>
	        <Modal show={this.state.show} onHide={this.handleClose}>
	          <Modal.Header closeButton>
	            <Modal.Title>Logout</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <h4>Are you sure you want to logout</h4>

	            <div ref="errorZone">&nbsp;</div>

	            <hr />

	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.handleExit} >Remain logged in</Button>
	            <Button onClick={this.handleSubmit} bsStyle="info">Logout</Button>
	          </Modal.Footer>
	        </Modal>
	      </div>
	    );
	  }
	}

export default LogoutConfirmationModal;
	