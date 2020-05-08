import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl'
import BasePage from './BasePage';
import FormItem from 'components/Elements/FormItem';
import BaseModal from 'components/Modal/BaseModal';


class WidgetGallery extends BasePage {
    
    constructor(props) {
        super(props);
        super.title = 'Widget Gallery - Last Refresh: ' + window.LocalDate('now').format('nice');
        
        this.baseModal = React.createRef();
        this.formRef = React.createRef();

        this.state = {
                email: "",
                password: "",
                date: "",
                validated: false,
            };

        
        super.refreshFunction = this.refreshFunction.bind(this);;
        super.handleEmailChange = this.handleEmailChange.bind(this);;
        super.handlePasswordChange = this.handlePasswordChange.bind(this);;
        super.handleDateChange = this.handleDateChange.bind(this);;
        super.handleValidate = this.handleValidate.bind(this);;
        super.handleSubmit = this.handleSubmit.bind(this);;
        
    }
    
    refreshFunction() {
        
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleDateChange(event) {
        this.setState({ date: event.target.value });
    }

    handleValidate(event) {
        this.setState({ validated: true });
        const form = this.formRef.current;
        form.checkValidity();

        
    }

    handleSubmit(event) {
         this.baseModal.current.handleShow(event);
    }

    
    
    render() {
        return (
            <div className="content">
                <BaseModal ref={this.baseModal} dismissButtonTextId="exit">
                    <pre>
                        {JSON.stringify(this.state, undefined, 4)}
                    </pre>
                </BaseModal>
                <Container fluid>
                <Form ref={this.formRef} noValidate validated={this.state.validated} >
                <FormItem 
                    controlId="email"
                    type="email" 
                    autoFocus 
                    required
                    iconClass="fa-user-o"
                    invalidFeedbackTextId="emailInvalid" 
                    onChange={this.handleEmailChange}
                />
                <FormItem 
                    controlId="password"
                    type="password" 
                    required
                    iconClass="fa-key"
                    invalidFeedbackTextId="passwordRequired" 
                    onChange={this.handlePasswordChange}
                />
                <FormItem 
                    controlId="date"
                        type="date" 
                            required
                            iconClass="fa-calendar"
                            invalidFeedbackTextId="dateRequired" 
                            onChange={this.handleDateChange}
                />
            </Form>
            <Button onClick={this.handleValidate} >
            <FormattedMessage
                id="validate"
            />
        </Button>
        <Button onClick={this.handleSubmit} bsstyle="info">
            <FormattedMessage
                id="submit"
            />
        </Button>

                </Container>
            </div>
        );
    }
}

export default WidgetGallery;
