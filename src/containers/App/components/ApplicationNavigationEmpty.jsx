import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';


class ApplicationNavigation extends Component {
    constructor( props ) {
        super( props );
        this.state = {
                scrollbarFadeEnabled: false,
                scrollbarOptions: {
                    wheelSpeed: 0.32,
                    minScrollbarLength: 500,
                    maxScrollbarLength: 500,
                    suppressScrollX: true,
                    height: '80vh'
                }
        };
        
        this.user = window.cache.auth.account;
        
        // some binds - not required for lifecycle methods
        this.addScrollbarListener = this.addScrollbarListener.bind( this );
        this.calibrateSizing = this.calibrateSizing.bind( this );
        this.items = this.items.bind( this );


    }

    componentDidMount() {
        this.calibrateSizing()

    }
    
    addScrollbarListener() {
    }
    
    calibrateSizing() {
        // resize sidebar scroll if window resized
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
                icon: 'lni-stats-up',
                route: 'Dashboard',
            },
            {
                type: 'label',
                title: 'Workflow',
            },
            {
                type: 'group',
                title: 'Claims',
                icon: 'lni-briefcase',
                condition: () => {
                    return this.user.hasAbilityTo('claim:create') ||
                        this.user.hasAbilityTo('claim:view:own') ||
                        this.user.hasAbilityTo('claim:view:division')
                },
                children: [
                {
                    title: 'View',
                    route: 'ClaimView',
                    condition: () => {
                        return this.$route.name === 'ClaimView'
                    }
                },
                {
                    title: 'Request',
                    route: 'ClaimProvisionInfo',
                    condition: () => {
                        return this.user.hasAbilityTo('claim:create')
                    }
                },
                {
                    title: 'List',
                    route: 'ClaimsList',
                    condition: () => {
                        return this.user.hasAbilityTo('claim:view:divisions') || this.user.hasAbilityTo('claim:view:own')
                    }
                }]
            },
            {
                type: 'link',
                title: 'Purchase Notes',
                icon: 'lni-ticket-alt',
                route: 'SupplierPurchaseNotes',
                condition: function() {
                    return this.user.company.type === 'SUPPLIER' || this.user.hasAbilityTo('*')
                }.bind(this),
            },
            {
                type: 'link',
                title: 'Dispatch Fees',
                icon: 'lni-delivery',
                route: 'SupplierDispatchQuotes',
                condition: function() {
                    return this.user.hasAbilityTo('supplier:dispatch:fees')
                }.bind(this),
            },
            {
                type: 'link',
                title: 'Inventory Quotes',
                icon: 'lni-package',
                route: 'SupplierInventoryQuotes',
                condition: function() {
                    return this.user.hasAbilityTo('supplier:inventory:quotes')
                }.bind(this),
            },
            {
                type: 'label',
                title: 'Support',
            },
            {
                type: 'link',
                icon: 'lni-book',
                title: 'Knowledge Base',
                route: 'SupportKnowledgeBase',
            },
            {
                type: 'label',
                title: 'Internal',
                condition: function() {
                    return this.user.globalAdmin !== undefined && this.user.globalAdmin
                }.bind(this),
            },
            {
                type: 'group',
                title: 'Websocket',
                icon: 'lni-website',
                condition: function() {
                    return this.user.hasAbilityTo('*')
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
                condition: function() {
                    return this.user.globalAdmin !== undefined && this.user.globalAdmin
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

                <Navbar.Brand href="#home">
                <img
                  src="https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg"
                  height="100"
                  alt="Logo"
                />
              </Navbar.Brand>


                <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                    <div className="navbar-collapse-header d-md-none">
                        <div className="row">
                             <div className="col-6 collapse-close">
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-fade-top"></div>
                     <div className="sidebar-bottom">
                        <div className="sidebar-fade-bottom"></div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default ApplicationNavigation;
