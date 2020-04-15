import React, { Component } from 'react';


class BasePage extends Component{
    constructor(props){
        super(props);

        this.propogateState = this.propogateState.bind(this);
        this.page = null;
    }
    
    propogateState() {
        if(window.titlePage !== undefined) {
            window.titlePage.setState({page: this});
        }
    }

    
    componentDidMount() {
        this.propogateState();

    }

    
}

export default BasePage;
