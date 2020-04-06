import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class InactivityModal extends React.Component {
	  constructor(props, context) {
	    super(props, context);

    
	    this.handleShow = this.handleShow.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleExit = this.handleExit.bind(this);

	    this.state = {
	      show: false,
	      username: "",
	      password: ""
	    };
	  }


	  
	  handleSubmit() {
		  this.refs.errorZone.innerHTML = "&nbsp;";
		  // TODO reset inactivity timer
		  
	  }

  
	  handleClose() {
	      this.setState({ show: false });
		  // TODO logoff to be safe

	  }

	  handleShow() {
	    this.setState({ show: true });
	  }

	  handleExit() {
		  this.handleClose();
	  }

	  render() {

	    return (
	      <div>

	        <Modal show={this.state.show} onHide={this.handleClose}>
	          <Modal.Header closeButton>
	            <Modal.Title>User inactivity detected</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <h4>You have been inactive for some time</h4>

	            <div ref="errorZone">&nbsp;</div>

	            <hr />

	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.handleExit}>Exit</Button>
	            <Button onClick={this.handleSubmit} bsStyle="info">Remain logged in</Button>
	          </Modal.Footer>
	        </Modal>
	      </div>
	    );
	  }
	}

export default InactivityModal;
	