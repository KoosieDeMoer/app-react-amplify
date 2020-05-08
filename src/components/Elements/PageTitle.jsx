import React, { Component } from "react";

class PageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      page: {},
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({ page: page });
  }

  render() {
    return this.state.page.title !== undefined &&
      this.state.page.title !== null ? (
      <div className="row">
        <div className="col-12 pb-3">
          <div className="no-highlight my-2">
            <i
              className={
                "fa fa-fw" +
                (this.state.loading
                  ? "fa-spinner fa-pulse fa-pulse-fast"
                  : "fa-info-circle")
              }
            ></i>
            <span className="header-title">{this.state.page.title}</span>
            {this.state.page.refreshFunction !== null && (
              <i
                className={
                  "float-right cursor fa fa-refresh" +
                  (this.state.page.loading ? "fa-spin fa-spin-fast" : "")
                }
                onClick={this.state.page.refreshFunction}
              ></i>
            )}
          </div>
          <hr className="barely-visible-border mt-1 mb-2" />
          {this.state.page.description !== null && (
            <span className="description-title">
              {this.state.page.description}
            </span>
          )}
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default PageTitle;
