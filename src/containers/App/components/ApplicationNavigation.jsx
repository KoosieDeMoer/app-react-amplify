import React, { Component } from 'react';


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
        this.addScrollbarListener()

    }
    
    addScrollbarListener() {
        this.$refs.scrollbar.$el.addEventListener('ps-y-reach-start', () => {
            this.scrollbarFadeEnabled = false
        })

        this.$refs.scrollbar.$el.addEventListener('ps-scroll-down', () => {
            this.scrollbarFadeEnabled = true
        })
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
                        return this.$route.name == 'ClaimView'
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
                    return this.user.company.type == 'SUPPLIER' || this.user.hasAbilityTo('*')
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
                <nav class="navbar sidebar navbar-vertical fixed-left navbar-expand-md navbar-light py-sm-3" id="sidenav-main" data-v-step="sidebar">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars text-dark text-lg"></i>
                </button>


                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                    <div class="navbar-collapse-header d-md-none">
                        <div class="row">
                             <div class="col-6 collapse-close">
                                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-fade-top"></div>
                    <Scrollbar options={this.state.scrollbarOptions} scrollHeight={this.state.scrollbarOptions.height} ref="scrollbar">
                        <template v-for="(item, index) in items">

                            /* Group */
                            <ul class="navbar-nav" v-if="item.type == 'group' && (item.condition == undefined || item.condition() == true)">
                                <li class="nav-item">
                                    <a href="javascript:;" class="nav-link collapsed" data-toggle="collapse" >
                                        <i className={item.icon}></i> { item.title }
                                    </a>
                                    <div class="collapse">
                                        <ul class="navbar-nav">
                                            <li class="nav-item nav-item-child" v-for="child in item.children" v-if="(child.condition == undefined || child.condition() == true)">

                                                <template v-if="child.action === undefined">
                                                    <router-link tag="a"  class="nav-link">
                                                        <i class="fa fa-circle-o"></i> { child.title }
                                                    </router-link>
                                                </template>
                                                <template v-else>
                                                    <a href="javascript:;" onClick={child.action} class="nav-link nav-link-action">
                                                        <i class="fa fa-circle-o"></i> { child.title }
                                                    </a>
                                                </template>

                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            /* Link (No Children) */
                            <ul class="navbar-nav" v-else-if="item.type == 'link' && (item.condition == undefined || item.condition() == true)">
                                <li class="nav-item">
                                    <template v-if="item.action === undefined">
                                        <router-link tag="a"  class="nav-link">
                                            <i className={item.icon}></i> { item.title }
                                        </router-link>
                                    </template>
                                    <template v-else>
                                        <a href="javascript:;" onClick={item.action} class="nav-link nav-link-action">
                                            <i className={item.icon}></i> { item.title }
                                        </a>
                                    </template>
                                </li>
                            </ul>

                            <template v-else-if="item.type == 'label' && (item.condition == undefined || item.condition() == true)">
                                /* Divider per label */
                                <hr class="my-3" v-if="index > 0" />

                                /* Label */
                                <h6 class="navbar-heading text-muted">
                                    { item.title }
                                </h6>
                            </template>
                        </template>
                    </Scrollbar>
                    <div class="sidebar-bottom">
                        <div class="sidebar-fade-bottom"></div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default ApplicationNavigation;
