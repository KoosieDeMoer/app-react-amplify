import React, { Component } from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CrudForm from 'components/Form/CrudForm';

class Popup extends Component {

    constructor( props ) {
        super( props );

        this.handleHide = this.handleHide.bind( this );
        this.handleSuccess = this.handleSuccess.bind( this );
        if ( props.callBack !== undefined ) {
            this.callBack = props.callBack.bind( this );
        }
        this.state = {
            show: false,
            buttonClass: props.buttonClass,
            component: props.component,
            componentConstructorArgs: props.componentConstructorArgs,
            dataId: props.dataId,
            mode: props.mode
        };
    }

    handleHide() {
        this.setState( { show: false } );
    }

    handleSuccess() {
        this.setState( { show: false } );
        this.callBack(( this.state.mode !== 'read' ) );
    }

    render() {
        return (
            <span>
                <OverlayTrigger placement="top"
                overlay={<Tooltip id={this.state.mode}>{this.state.mode}</Tooltip>}>
              <Button
                    className={this.state.buttonClass}
                    bsSize="sm"
                    onClick={() => this.setState( { show: true } )}
                >
                </Button>
                </OverlayTrigger>

                <Modal
                    show={this.state.show}
                    container={this}>
                    <div className='modal-body'>
                        { /* standard example - switch case switch/case switch-case - compact*/
                                {
                                    'CrudForm': <CrudForm constructorArgs={this.state.componentConstructorArgs} mode={this.state.mode} dataId={this.state.dataId} handleDismiss={this.handleHide} handleSuccess={this.handleSuccess} />,
                                }[this.state.component]
                            
                        }
                    </div>
                </Modal>
            </span>
        );
    }
}

export default Popup;