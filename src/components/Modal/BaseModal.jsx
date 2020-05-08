import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl'


import './Modal.css';

class BaseModal extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleDismiss = this.handleDismiss.bind(this);
        this.showError = this.showError.bind(this);

		this.state = {
			show: false
		};
	}

	handleClose() {
	    if(this.props.handleClose !== undefined) {
	        this.props.handleClose();
	    }
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	handleDismiss() {
        if(this.props.handleDismiss !== undefined) {
            this.props.handleDismiss();
        }
        this.setState({ show: false });
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
				{ this.props.titleTextId &&
					<Modal.Header closeButton={this.props.closeButton}>
						<Modal.Title>
						    <FormattedMessage
						        id={this.props.titleTextId}
						    />
		                </Modal.Title>
					</Modal.Header>
				}
					<Modal.Body>
					    { this.props.subtitleTextId &&
						<h5>
						    <FormattedMessage
						        id={this.props.subtitleTextId}
						    />
						</h5>
					    }
					    {this.props.children}
						<hr />
					</Modal.Body>
					<Modal.Footer>
                        { this.props.dismissButtonTextId &&
						<Button onClick={this.handleDismiss} >
						    <FormattedMessage
						        id={this.props.dismissButtonTextId}
						    />
						</Button>
                        }
						{ this.props.confirmButtonTextId &&
						<Button onClick={this.props.handleConfirm} bsstyle="info">
                            <FormattedMessage
                                id={this.props.confirmButtonTextId}
                            />
                        </Button>
						}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default BaseModal;
