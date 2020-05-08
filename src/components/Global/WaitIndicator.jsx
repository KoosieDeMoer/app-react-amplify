import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';


class WaitIndicator extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {waiting: false};
        this.showWait =  this.showWait.bind(this);
        
        window.showWait = this.showWait;
    }
    
    showWait(waiting) {
        this.setState({waiting: waiting});
    }
    
    render(){
        return (
                <div style={{height: "100vh", position: "fixed", top: "40%", left: "40%"}}>
                {this.state.waiting && <Spinner animation="border" />}
                </div>
       );
    }
}

export default WaitIndicator;
