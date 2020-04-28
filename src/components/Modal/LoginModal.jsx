import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import BaseModal from './BaseModal';

import FormItem from 'components/Elements/FormItem';
import {showError} from 'components/Global/Toaster';

class LoginModal extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.formRef = React.createRef();
        this.tpRef = React.createRef();
		this.baseModal = React.createRef();

 		this.handleShow = this.handleShow.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.testAuthenticationToken = this.testAuthenticationToken.bind(this);
		this.loginSucceeded = this.loginSucceeded.bind(this);
		this.loginFailed = this.loginFailed.bind(this);

		this.state = {
			email: "",
			password: "",
			validated: false,
		};
	}

    handleShow(event) {
		this.baseModal.current.handleShow(event);
	}
	handleEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
	}

	handleSubmit(event) {
		this.setState({ validated: true });
		const form = this.formRef.current;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();

		} else {
			// XXX work out how to store a general reference to an instance of WebApi or any instance
			window.cache.WebApi.tokens().create({
				email: this.state.email,
				password: this.state.password,
				name: 'Frontend Session',
				grant: 'password'
			}).then((response) => {
				window.cache.auth.access = response.data.data
				window.cache.storage.set('access', window.cache.auth.access)
				this.testAuthenticationToken(false)
			}).catch((error) => {
			    showError((error.response.status === 401) ? 'Credentials failed' : error.message);
			})
		}


	}


	testAuthenticationToken(silentCheck) {
		window.cache.WebApi.accounts().find().then((response) => {
			console.log('testAuthenticationToken', response)
			window.cache.auth.account = response.data.data
			window.cache.auth.validated = true
			this.loginSucceeded(response)
		}).catch((error) => {
			if (!silentCheck) {
				this.loginFailed(error)
			}
		}).finally(f => {
			//this.form.loading = false
		})
	}

	loginSucceeded(response) {
		window.cache.storage.set('account', window.cache.auth.account)

		// TODO load the current route or base route if none exists
		window.location.href = "/";


	}

	loginFailed(error) {
		window.cache.auth.access = false
		window.cache.auth.validated = false
		window.cache.storage.remove('access')
        showError(error.message);
	}


	render() {

		return (
			<BaseModal ref={this.baseModal} title="Login" subtitle="Please login to continue" dismissButtonText="Exit" confirmButtonText="Login" handleConfirm={this.handleSubmit}>
				<Form ref={this.formRef} noValidate validated={this.state.validated} onSubmit={this.handleSubmit} >
					<FormItem 
					    controlId="email"
					    type="email" 
					    autoFocus 
					    required
					    iconClass="fa-user-o"
					    onChange={this.handleEmailChange}
					    invalidFeedback="Please enter an email." 
					/>
					<Form.Group controlId="password">
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text><i className="fa fa-key text-dark"></i></InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control
								type="password"
								required
								onChange={this.handlePasswordChange}
							/>
							<Form.Control.Feedback type="invalid">
								Please enter password.
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Form>
			</BaseModal>
		);
	}
}

export default LoginModal;
