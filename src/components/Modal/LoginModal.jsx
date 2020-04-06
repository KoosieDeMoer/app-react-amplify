import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class LoginModal extends React.Component {
	  constructor(props, context) {
	    super(props, context);

	    
        this.errorZone = React.createRef();

	    this.handleShow = this.handleShow.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleExit = this.handleExit.bind(this);
	    this.handleEmailChange = this.handleEmailChange.bind(this);
	    this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.testAuthenticationToken = this.testAuthenticationToken.bind(this);
        this.loginSucceeded = this.loginSucceeded.bind(this);
        this.loginFailed = this.loginFailed.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
	    this.validateForm = this.validateForm.bind(this);

	    this.state = {
	      show: false,
	      email: "",
	      password: ""
	    };
	  }


	  handleEmailChange(event) {
		    this.setState({email: event.target.value});
		  }

	  handlePasswordChange(event) {
		    this.setState({password: event.target.value});
		  }
	  
	  handleSubmit() {
	      this.errorZone.current.innerHTML = "&nbsp;";
		  if(this.validateForm()) { // b & b
		      // XXX work out how to store a general reference to an instance of WebApi or any instance
	            window.cache.WebApi.tokens().create({
	                email: this.state.email,
	                password: this.state.password,
	                name: 'Frontend Session',
	                grant: 'password'
	            }).then((response) => {
	                console.log('handleSubmit response', response);
	                window.cache.auth.access = response.data
	                window.cache.storage.set('access', window.cache.auth.access)
	                this.testAuthenticationToken(false)
	            }).catch((error) => {
	                this.errorZone.current.innerHTML = error
	            })

		  }
		  
	  }
	  
	  
      testAuthenticationToken(silentCheck) {
          window.cache.WebApi.accounts().find().then((response) => {
              console.log('testAuthenticationToken', response)
              window.cache.auth.account = response.data
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
          this.errorZone.current.innerHTML = '&nbsp;';
          window.cache.storage.set('account', window.cache.auth.account)

          // TODO load the current route or base route if none exists
          window.location.href = "/";

          
          }
      
      loginFailed(error) {
          window.cache.auth.access = false
          window.cache.auth.validated = false
          window.cache.storage.remove('access')

          this.errorZone.current.innerHTML = error
      }


	  validateForm() {
		  if(this.state.email !== '' && this.state.password !== '') {
			  return true;
		  } else {
			  return false;
		  }
	  }

	  
	  handleClose() {
	    this.setState({ show: false });
	    // TODO load the logged out route

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
	        <Modal show={this.state.show} onHide={this.handleClose} backdrop="static">
	          <Modal.Header>
	            <Modal.Title>Login</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <h4>Please login to continue</h4>
	            <form onSubmit={this.handleSubmit}>
	            <Form.Group controlId="email">
	              <Form.Label>Email</Form.Label>
	              <Form.Control
	                onChange={this.handleEmailChange}
	                autoFocus
	              />
	            </Form.Group>
	            <Form.Group controlId="password">
	              <Form.Label>Password</Form.Label>
	              <Form.Control
	                type="password"
	                onChange={this.handlePasswordChange}
	              />
	            </Form.Group>
	          </form>

	            <div ref={this.errorZone}>&nbsp;</div>

	            <hr />

	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.handleExit} >Exit</Button>
	            <Button onClick={this.handleSubmit} disabled={!this.validateForm()} bsstyle="info">Login</Button>
	          </Modal.Footer>
	        </Modal>
	      </div>
	    );
	  }
	}

export default LoginModal;
	