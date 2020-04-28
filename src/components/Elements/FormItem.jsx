import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';


class FormItem extends Component{
    
    render(){
        return (
                <Form.Group controlId={this.props.controlId}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text><i className={'fa ' + this.props.iconClass + ' text-dark'}></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type={this.props.type}
                        autoFocus={this.props.autoFocus}
                        required={this.props.required}
                        onChange={this.props.onChange}
                    />
                    <Form.Control.Feedback type="invalid">
                    {this.props.invalidFeedback}
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

        );
    }
}

export default FormItem;
