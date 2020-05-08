import React from 'react';

import BaseModal from './BaseModal';

import {showError} from 'components/Global/Toaster';

class InactivityModal extends React.Component {
	  constructor(props, context) {
	    super(props, context);
    
        this.baseModal = React.createRef();

        this.handleLogout = this.handleLogout.bind(this);
	    this.handleConfirm = this.handleConfirm.bind(this);

	  }
	  
	  handleShow(event) {
	      this.baseModal.current.handleShow(event);
	  }

	  handleConfirm() {
		  // do nothing
	  }

	  handleLogout() {
	      
	      // TODO migrate to TokenLifeManager

	      window.cache.WebApi.tokens(window.cache.auth.access.id).destroy()
          .then((response) => {
              window.cache.auth.access = null;
              window.cache.storage.set('access', null);
          }).catch((error) => {
              showError(error.message);
          })
	      
	  }
  
	  render() {

	    return (
          <BaseModal 
              ref={this.baseModal} 
              titleTextId="inactivityTitle" 
              subtitleTextId="inactivitySubtitle"
              closeButton    
              dismissButtonTextId="exit"
              confirmButtonTextId="remainLoggedIn"
              handleClose={this.handleConfirm}
              handleDismiss={this.handleLogout}
              handleConfirm={this.handleConfirm}/>

	    );
	  }
	}

export default InactivityModal;
	