import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BasePage from "./BasePage";

class Placeholder extends BasePage {
  constructor(props) {
    super(props);
    super.title =
      "Placeholder - Last Refresh: " + window.LocalDate("now").format("nice");
    //       super.description = "Description";
    super.refreshFunction = this.refreshFunction.bind(this);
  }

  refreshFunction() {}

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
