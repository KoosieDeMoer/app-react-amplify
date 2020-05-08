import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

export function showError(text) {
    window.showWait(false);

    toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
        });
}

/* This is the lightest possible wrapper for react-toastify. I could not get react-bootstrap Toast to show */
class Toaster extends Component{
        
    render(){
        return (
                <ToastContainer />
       );
    }
}

export default Toaster;
