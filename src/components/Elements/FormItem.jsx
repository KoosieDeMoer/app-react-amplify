import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import DateTimePicker from "components/Elements/FormItems/DateTimePicker";

class FormItem extends Component {
  render() {
    return (
      <Form.Group controlId={this.props.controlId}>
        <InputGroup>
          {this.props.labelTextId && (
            <Form.Label>
              <FormattedMessage id={this.props.labelTextId} />
            </Form.Label>
          )}
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className={"fa " + this.props.iconClass + " text-dark"}></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          {(() => {
            switch (this.props.type) {
              case "date":
                return (
                  <DateTimePicker
                    value={this.props.value}
                    autoFocus={this.props.autoFocus}
                    required={this.props.required}
                    onChange={this.props.onChange}
                  />
                );
              default:
                return (
                  <Form.Control
                    type={this.props.type}
                    value={this.props.value}
                    autoFocus={this.props.autoFocus}
                    required={this.props.required}
                    onChange={this.props.onChange}
                  />
                );
            }
          })()}
          {this.props.invalidFeedbackTextId && (
            <Form.Control.Feedback type="invalid">
              <FormattedMessage id={this.props.invalidFeedbackTextId} />
            </Form.Control.Feedback>
          )}
        </InputGroup>
      </Form.Group>
    );
  }
}

export default FormItem;
