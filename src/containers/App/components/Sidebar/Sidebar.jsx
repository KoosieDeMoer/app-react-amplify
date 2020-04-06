import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderLinks from '../Header/HeaderLinks';


import { appRoutes } from 'routes/app.jsx';

//require("jspolyfill-array.prototype.findIndex");
//require('string.prototype.includes');

let topMenuItems = null;

let noBorder = {
    border: '0px',
    padding: 0,
    margin: 0,
    width: '100%',
    borderCollapse: 'collapse'
};


class Sidebar extends Component {
    constructor( props ) {
        super( props );
        console.log('Sidebar props', props);
        this.state = {
            width: window.innerWidth
        }
        console.log('Sidebar this.state.width', this.state.width);

    }
    activeRoute( routeName ) {
        return this.props.location.pathname.indexOf( routeName ) > -1 ? 'active' : '';
    }
    updateDimensions() {
        this.setState( { width: window.innerWidth } );
    }
    componentDidMount() {
        console.log('Sidebar componentDidMount');
        this.updateDimensions();
        window.addEventListener( "resize", this.updateDimensions.bind( this ) );
    }

    myClickHandler = function( event ) {
        let name = event.currentTarget.href;

        /* eslint array-callback-return: "off" */
        topMenuItems.map(( pair ) => {
            if ( pair.div !== null ) {
                pair.div.style.cssText = ( name.includes(pair.name) ) ? 'display:  block;' : 'display:  none;';
            }
        } );
    }



    render() {
        topMenuItems = [];
        return (
            <div id="sidebar" className="sidebar" data-color="black" style={{width: "25vh"}}>
                <div className="sidebar-background"></div>
                <div className="sidebar-wrapper">
                    <ul className="nav" style={{width: "180px"}}>
                        {this.state.width <= 991 ? ( <HeaderLinks /> ) : null}
                        {
                            appRoutes.map(( prop, key ) => {
                                 if ( prop.topLevel )
                                    if ( prop.childItems !== undefined ) {
                                        return (
                                            <li id={prop.name} className={this.activeRoute( prop.path )} key={key}>
                                                <NavLink to={prop.path} onClick={this.myClickHandler} className="nav-link" activeClassName="active">
                                                    <i className={prop.icon}></i>
                                                    <p>{prop.name}</p>
                                                </NavLink>
                                                <div  ref={( div ) => { topMenuItems.push( { name: prop.path, div: div } ); }} style={{ display: 'none' }}>
                                                    <table style={noBorder}>
                                                        <tbody>
                                                            <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>
                                                                <ul className="nav">
                                                                    {
                                                                        prop.childItems.map(( childItem, childKey ) => {
                                                                            let childProp = appRoutes[appRoutes.findIndex( route => route.id === childItem )];

                                                                            if ( !childProp.redirect )
                                                                                return (
                                                                                    <li className={this.activeRoute( childProp.path )} key={childKey}>
                                                                                        <NavLink to={childProp.path} className="nav-link" activeClassName="active">
                                                                                            <i className={childProp.icon}></i>
                                                                                            <p>{childProp.name}</p>
                                                                                        </NavLink>
                                                                                    </li>
                                                                                );
                                                                            return null;
                                                                        } )
                                                                    }
                                                                </ul>
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </li>


                                        );
                                    } else {
                                        return (
                                            <li className={prop.upgrade ? "active active-pro" : this.activeRoute( prop.path )} key={key}>
                                                <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                                    <i className={prop.icon}></i>
                                                    <p>{prop.name}</p>
                                                </NavLink>
                                            </li>
                                        );
                                    }
                                return null;
                            } )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
