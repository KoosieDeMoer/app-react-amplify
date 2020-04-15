import React, { Component } from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import BasePage from './BasePage';


class Dashboard extends BasePage {
    
    constructor(props) {
        super(props);
        super.title = 'Dashboard - Last Refresh: ' + window.LocalDate('now').format('nice');
        super.refreshFunction = this.refreshFunction.bind(this);;
        
    }
    
    refreshFunction() {
        
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

export default Dashboard;
