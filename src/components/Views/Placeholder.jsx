import React, { Component } from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import BasePage from './BasePage';

class Placeholder extends BasePage {
    
    constructor(props) {
        super(props);
        this.title = "Placeholder";
        super.propogateState();
    }
    
    
    
    render() {
        return (
            <div className="content">
                <Container fluid>
                    <Row>
                        <Col lg={12} sm={6}>
                                 TBD
                         </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Placeholder;
