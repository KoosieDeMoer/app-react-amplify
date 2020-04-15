import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import {
    isMobile
} from 'mobile-device-detect'
import $ from 'jquery';


/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "styles" }]*/
/* styles is used silently */
import styles from './ApplicationNavigation.css';

class ApplicationNavigation extends Component {
    constructor(props) {
        super(props);
        console.log('ApplicationNavigation constructor()  window.cache.auth.account', window.cache.auth.account);
        
        this.state = {
            scrollbarFadeEnabled: false,
            scrollbarOptions: {
                wheelSpeed: 0.32,
                minScrollbarLength: 500,
                maxScrollbarLength: 500,
                suppressScrollX: true,
                height: '80vh'
            },
            user: ((window.cache.auth.account !== '') ? new User(window.cache.auth.account) : null),
            items: (window.cache.auth.account !== '') ? this.items() : []
        };

        console.log('ApplicationNavigation constructor() this.state', this.state);
         //some refs
        this.scrollbarRef = React.createRef();

        
        // some binds - not required for lifecycle methods
        this.addScrollbarListener = this.addScrollbarListener.bind(this);
        this.calibrateSizing = this.calibrateSizing.bind(this);
        // method does not refer to this this.attachJqueryAccordionCrap = this.attachJqueryAccordionCrap.bind(this);
        this.items = this.items.bind(this);


    }

    componentDidMount() {
        this.calibrateSizing();
        this.attachJqueryAccordionCrap();

    }

    addScrollbarListener() {
    }

    calibrateSizing() {
        // resize sidebar scroll if window resized
    }

    attachJqueryAccordionCrap() {
        // Collapses other menu's when one is expanded
        if (isMobile) {
            // TODO convert this to non-jQuery
            $('[id^=sidebar-item-]').on('show.bs.collapse', function() {
                $('[id^=sidebar-item-]').each(function() {
                   $(this).collapse('hide')
                })
            })

        }
    }

    items() {
        return [
            {
                type: 'label',
                title: 'Overview'
            },
            {
                type: 'link',
                title: 'Dashboard',
                icon: 'fa fa-line-chart',
                route: 'Dashboard',
            },
            {
                type: 'label',
                title: 'Workflow',
            },
            {
                type: 'group',
                title: 'Claims',
                icon: 'fa fa-briefcase',
                condition: () => {
                    return this.state.user.hasAbilityTo('claim:create') ||
                        this.state.user.hasAbilityTo('claim:view:own') ||
                        this.state.user.hasAbilityTo('claim:view:division')
                },
                children: [
                    {
                        title: 'View',
                        route: 'ClaimView',
                        condition: () => {
                            // TODO to React return this.$route.name === 'ClaimView'
                            return true
                        }
                    },
                    {
                        title: 'Request',
                        route: 'ClaimProvisionInfo',
                        condition: () => {
                            return this.state.user.hasAbilityTo('claim:create')
                        }
                    },
                    {
                        title: 'List',
                        route: 'ClaimsList',
                        condition: () => {
                            return this.state.user.hasAbilityTo('claim:view:divisions') || this.state.user.hasAbilityTo('claim:view:own')
                        }
                    }]
            },
            {
                type: 'link',
                title: 'Purchase Notes',
                icon: 'fa fa-ticket',
                route: 'SupplierPurchaseNotes',
                condition: function () {
                    return this.state.user.company.type === 'SUPPLIER' || this.state.user.hasAbilityTo('*')
                }.bind(this),
            },
            {
                type: 'link',
                title: 'Dispatch Fees',
                icon: 'fa fa-truck',
                route: 'SupplierDispatchQuotes',
                condition: function () {
                    return this.state.user.hasAbilityTo('supplier:dispatch:fees')
                }.bind(this),
            },
            {
                type: 'link',
                title: 'Inventory Quotes',
                icon: 'fa fa-envelope',
                route: 'SupplierInventoryQuotes',
                condition: function () {
                    return this.state.user.hasAbilityTo('supplier:inventory:quotes')
                }.bind(this),
            },
            {
                type: 'label',
                title: 'Support',
            },
            {
                type: 'link',
                icon: 'fa fa-book',
                title: 'Knowledge Base',
                route: 'SupportKnowledgeBase',
            },
            {
                type: 'label',
                title: 'Internal',
                condition: function () {
                    return this.state.user.globalAdmin !== undefined && this.state.user.globalAdmin
                }.bind(this),
            },
            {
                type: 'group',
                title: 'Websocket',
                icon: 'fa fa-globe',
                condition: function () {
                    return this.state.user.hasAbilityTo('*')
                }.bind(this),
                children: [
                    {
                        title: 'Connections',
                        route: 'WebsocketConnections',
                    }]
            },
            {
                type: 'link',
                title: 'Switch Role',
                icon: 'fa fa-shield',
                condition: function () {
                    return this.state.user.globalAdmin !== undefined && this.state.user.globalAdmin
                }.bind(this),
                action: () => {
                    //this.showRoleSwitchModal()
                }
            }
        ]
    }



    render() {
        return (
            <nav className="navbar sidebar navbar-vertical fixed-left navbar-expand-md navbar-light py-sm-3" id="sidenav-main" data-v-step="sidebar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars text-dark text-lg"></i>
                </button>

                <Link to="/home">
                    <img
                        src="https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg"
                        alt="Logo"
                    />
                </Link>

                {/* Sidebar */}
                <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                    <div className="navbar-collapse-header d-md-none">
                        <div className="row">
                            <Link className="col-6" to="/home">
                                <img
                                    src="https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg"
                                    alt="Logo"
                                />
                            </Link>
                            <div className="col-6 collapse-close">
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'sidebar-fade-top' + this.state.scrollbarFadeEnabled ? ' show' : ''}></div>
                    {/* next was Scrollbar */}
                    <div options={this.state.scrollbarOptions} scrollheight={this.state.scrollbarOptions.height} ref={this.scrollbarRef}>
                        {
                            this.state.items.map((item, index) => {

                                /* Group */
                                if (item.type === 'group' && (item.condition === undefined || item.condition() === true)) {
                                    return (

                                        <ul className="navbar-nav" id={'sidebar-group-' + index} key={'sidebar-group-' + index}>
                                            <li className="nav-item" >
                                                <div className="nav-link link-button" data-toggle="collapse" data-target={'#sidebar-item-' + index} role="menuitem">
                                                    <i className={item.icon}></i> {item.title}
                                                </div>
                                                <div className="collapse" id={'sidebar-item-' + index} data-parent={'#sidebar-group-' + index}>
                                                    <ul className="navbar-nav">
                                                        {
                                                            (item.children !== undefined) ? (

                                                                item.children.map((child, childIndex) => {
                                                                    return (
                                                                        (child.condition === undefined || child.condition() === true) ? (

                                                                            <li className="nav-item nav-item-child" key={'sidebar-item-' + index + '-' + childIndex} >
                                                                                {
                                                                                    (child.action === undefined) ? (
                                                                                        <Link to={child.route} className="nav-link">
                                                                                            <i className="fa fa-circle-o"></i> {child.title}
                                                                                        </Link>
                                                                                    ) : (
                                                                                            <div className="nav-link nav-link-action link-button" onClick={child.action}>
                                                                                                <i className="fa fa-circle-o"></i> {child.title}
                                                                                            </div>
                                                                                        )
                                                                                }
                                                                            </li>
                                                                        ) : ""
                                                                    )
                                                                })) : ""}
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    )
                                }
                                else if (item.type === 'link' && (item.condition === undefined || item.condition() === true)) {
                                    return (

                                        /* Link (No Children) */
                                        <ul className="navbar-nav" key={'sidebar-group-' + index}>
                                            <li className="nav-item" >
                                                {(item.action === undefined) ? (
                                                    <Link to={item.route} className="nav-link">
                                                        <i className={item.icon}></i> {item.title}
                                                    </Link>
                                                ) : (
                                                        <div className="nav-link nav-link-action link-button" onClick={item.action}>
                                                            <i className={item.icon}></i> {item.title}
                                                        </div>
                                                    )
                                                }
                                            </li>
                                        </ul>
                                    )
                                }
                                else if (item.type === 'label' && (item.condition === undefined || item.condition() === true)) {
                                    return (
                                        <div key={'sidebar-group-' + index}>
                                            {/* Divider per label */}
                                            {(index > 0) &&
                                                <hr className="my-3" />
                                            }
                                            {/* Label */}
                                            <h6 className="navbar-heading text-muted">
                                                {item.title}
                                            </h6>
                                        </div>
                                    )
                                } else {
                                    return ("")
                                }
                            })}
                    </div>
                    <div className="sidebar-bottom">
                        <div className="sidebar-fade-bottom"></div>
                    </div>
                </div>
            </nav>
        );
    }
}

// TODO class move to own file on first shared use
class User {

    constructor(account) {
        // invokes the setter
        this.company = account.company;
        this.role = account.role;
    }


    hasAbilityTo(ability) {
        return this.role.abilities.find(function (o) {
            return o.name === '*' || o.name === ability
        }) !== undefined
    }


}

export default ApplicationNavigation;
