import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "styles" }]*/
import styles from './Modal.css';

class BaseModal extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleExit = this.handleExit.bind(this);
        this.showError = this.showError.bind(this);

		this.state = {
			show: false
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	handleExit() {
		this.handleClose();
	}

	showError(errorText) {
	    window.toaster.show(errorText, {
            appearance: 'error',
            autoDismiss: true,
          });
	}
	
	render() {

		return (
			<div>
				<Modal show={this.state.show} onHide={this.handleClose} backdrop="static">
					<Modal.Header>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h5>{this.props.subtitle}</h5>
						{this.props.children}
						<hr />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleExit} >{this.props.dismissButtonText}</Button>
						<Button onClick={this.props.handleConfirm} bsstyle="info">{this.props.confirmButtonText}</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default BaseModal;
