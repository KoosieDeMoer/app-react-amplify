import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6">
            <div className="copyright text-center text-xl-left text-muted">
              <FormattedMessage id="copyright" />
              &nbsp;{new Date().getFullYear()}{" "}
              <a
                href="https://www.slvrcld.com"
                className="font-weight-bold ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                SLVRCLD BV
              </a>
              <br />
            </div>
          </div>
          <div className="col-xl-6">
            <ul className="nav nav-footer justify-content-center justify-content-xl-end"></ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
