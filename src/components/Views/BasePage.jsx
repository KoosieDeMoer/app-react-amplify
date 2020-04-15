import React, { Component } from 'react';


class BasePage extends Component{
    constructor(props){
        super(props);

        this.propogateState = this.propogateState.bind(this);

    }
    
    propogateState() {
        window.titlePage.setState({page: this});
    }
    
}

export default BasePage;
