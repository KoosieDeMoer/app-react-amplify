import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl'


class FormItem extends Component{
    
    render(){
        return (
                <Form.Group controlId={this.props.controlId}>
                <InputGroup>
                {
                this.props.labelTextId && 
                <Form.Label>
                    <FormattedMessage
                        id={this.props.labelTextId}
                   />
                  </Form.Label>
                }
                   <InputGroup.Prepend>
                        <InputGroup.Text><i className={'fa ' + this.props.iconClass + ' text-dark'}></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type={this.props.type}
                        autoFocus={this.props.autoFocus}
                        required={this.props.required}
                        onChange={this.props.onChange}
                    />
                    {
                        this.props.invalidFeedbackTextId && 
                    <Form.Control.Feedback type="invalid">
                        <FormattedMessage
                            id={this.props.invalidFeedbackTextId}
                        />
                    </Form.Control.Feedback>
                    }
                </InputGroup>
            </Form.Group>

        );
    }
}

export default FormItem;
