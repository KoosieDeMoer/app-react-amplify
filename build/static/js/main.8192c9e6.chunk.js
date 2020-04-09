(this["webpackJsonpapp-react"]=this["webpackJsonpapp-react"]||[]).push([[0],{68:function(e,t,a){e.exports=a(86)},73:function(e,t,a){},74:function(e,t,a){},77:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),c=a.n(o),l=a(29),r=a(27),s=(a(73),a(74),a(30)),u=a.n(s),d=(a(75),a(7)),h=a(8),m=a(6),b=a(11),f=a(12),v=a(97),p=a(98),g=a(96),w=(a(77),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={account:window.cache.auth.account,menu:!1},n.logout=n.logout.bind(Object(m.a)(n)),n}return Object(h.a)(a,[{key:"logout",value:function(){window.cache.storage.set("access",null),window.location.href="/"}},{key:"render",value:function(){return i.a.createElement(v.a,{className:"shadow-vivid fixed-top",id:"navbar-main"},i.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(p.a,{className:"justify-content-end",style:{width:"100%"}},i.a.createElement(g.a,{title:i.a.createElement("span",{className:"align-middle text-sm d-none d-lg-inline-block"},i.a.createElement("span",{className:"font-weight-bolder"},this.state.account.fullname),i.a.createElement("br",null),void 0!==this.state.account.role&&""!==this.state.account.role&&i.a.createElement("span",{className:"font-weight-light"},this.state.account.role.title)),id:"basic-nav-dropdown"},void 0!==this.state.account.company&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a.Item,null,this.state.account.company.name),i.a.createElement(g.a.Divider,null)),i.a.createElement(g.a.Item,{href:"#action/3.2"},"Bootstrap"),i.a.createElement(g.a.Divider,null),i.a.createElement(g.a.Item,{onClick:this.logout},"Logout")))))}}]),a}(n.Component)),E=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"row align-items-center justify-content-xl-between"},i.a.createElement("div",{className:"col-xl-6"},i.a.createElement("div",{className:"copyright text-center text-xl-left text-muted"},"Copyright \xa9 ",(new Date).getFullYear()," ",i.a.createElement("a",{href:"https://www.slvrcld.com",className:"font-weight-bold ml-1",target:"_blank",rel:"noopener noreferrer"},"SLVRCLD BV"),i.a.createElement("br",null))),i.a.createElement("div",{className:"col-xl-6"},i.a.createElement("ul",{className:"nav nav-footer justify-content-center justify-content-xl-end"}))))}}]),a}(n.Component),y=a(60),k=(a(82),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={scrollbarFadeEnabled:!1,scrollbarOptions:{wheelSpeed:.32,minScrollbarLength:500,maxScrollbarLength:500,suppressScrollX:!0,height:"80vh"}},n.user=new j(window.cache.auth.account),n.scrollbarRef=i.a.createRef(),n.addScrollbarListener=n.addScrollbarListener.bind(Object(m.a)(n)),n.calibrateSizing=n.calibrateSizing.bind(Object(m.a)(n)),n.items=n.items.bind(Object(m.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.calibrateSizing(),this.attachJqueryAccordionCrap()}},{key:"addScrollbarListener",value:function(){}},{key:"calibrateSizing",value:function(){}},{key:"attachJqueryAccordionCrap",value:function(){y.isMobile&&u()("[id^=sidebar-item-]").on("show.bs.collapse",(function(){u()("[id^=sidebar-item-]").each((function(){u()(this).collapse("hide")}))}))}},{key:"items",value:function(){var e=this;return[{type:"label",title:"Overview"},{type:"link",title:"Dashboard",icon:"fa fa-line-chart",route:"Dashboard"},{type:"label",title:"Workflow"},{type:"group",title:"Claims",icon:"fa fa-briefcase",condition:function(){return e.user.hasAbilityTo("claim:create")||e.user.hasAbilityTo("claim:view:own")||e.user.hasAbilityTo("claim:view:division")},children:[{title:"View",route:"ClaimView",condition:function(){return!0}},{title:"Request",route:"ClaimProvisionInfo",condition:function(){return e.user.hasAbilityTo("claim:create")}},{title:"List",route:"ClaimsList",condition:function(){return e.user.hasAbilityTo("claim:view:divisions")||e.user.hasAbilityTo("claim:view:own")}}]},{type:"link",title:"Purchase Notes",icon:"fa fa-ticket",route:"SupplierPurchaseNotes",condition:function(){return"SUPPLIER"===this.user.company.type||this.user.hasAbilityTo("*")}.bind(this)},{type:"link",title:"Dispatch Fees",icon:"fa fa-truck",route:"SupplierDispatchQuotes",condition:function(){return this.user.hasAbilityTo("supplier:dispatch:fees")}.bind(this)},{type:"link",title:"Inventory Quotes",icon:"fa fa-envelope",route:"SupplierInventoryQuotes",condition:function(){return this.user.hasAbilityTo("supplier:inventory:quotes")}.bind(this)},{type:"label",title:"Support"},{type:"link",icon:"fa fa-book",title:"Knowledge Base",route:"SupportKnowledgeBase"},{type:"label",title:"Internal",condition:function(){return void 0!==this.user.globalAdmin&&this.user.globalAdmin}.bind(this)},{type:"group",title:"Websocket",icon:"fa fa-globe",condition:function(){return this.user.hasAbilityTo("*")}.bind(this),children:[{title:"Connections",route:"WebsocketConnections"}]},{type:"link",title:"Switch Role",icon:"fa fa-shield",condition:function(){return void 0!==this.user.globalAdmin&&this.user.globalAdmin}.bind(this),action:function(){}}]}},{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar sidebar navbar-vertical fixed-left navbar-expand-md navbar-light py-sm-3",id:"sidenav-main","data-v-step":"sidebar"},i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("i",{className:"fa fa-bars text-dark text-lg"})),i.a.createElement(l.b,{to:"/home"},i.a.createElement("img",{src:"https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg",alt:"Logo"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"sidenav-collapse-main"},i.a.createElement("div",{className:"navbar-collapse-header d-md-none"},i.a.createElement("div",{className:"row"},i.a.createElement(l.b,{className:"col-6",to:"/home"},i.a.createElement("img",{src:"https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg",alt:"Logo"})),i.a.createElement("div",{className:"col-6 collapse-close"},i.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle sidenav"},i.a.createElement("span",null),i.a.createElement("span",null))))),i.a.createElement("div",{className:" show"}),i.a.createElement("div",{options:this.state.scrollbarOptions,scrollheight:this.state.scrollbarOptions.height,ref:this.scrollbarRef},this.items().map((function(e,t){return"group"!==e.type||void 0!==e.condition&&!0!==e.condition()?"link"!==e.type||void 0!==e.condition&&!0!==e.condition()?"label"!==e.type||void 0!==e.condition&&!0!==e.condition()?"":i.a.createElement("div",{key:"sidebar-group-"+t},t>0&&i.a.createElement("hr",{className:"my-3"}),i.a.createElement("h6",{className:"navbar-heading text-muted"},e.title)):i.a.createElement("ul",{className:"navbar-nav",key:"sidebar-group-"+t},i.a.createElement("li",{className:"nav-item"},void 0===e.action?i.a.createElement(l.b,{to:e.route,className:"nav-link"},i.a.createElement("i",{className:e.icon})," ",e.title):i.a.createElement("div",{className:"nav-link nav-link-action link-button",onClick:e.action},i.a.createElement("i",{className:e.icon})," ",e.title))):i.a.createElement("ul",{className:"navbar-nav",id:"sidebar-group-"+t,key:"sidebar-group-"+t},i.a.createElement("li",{className:"nav-item"},i.a.createElement("div",{className:"nav-link link-button","data-toggle":"collapse","data-target":"#sidebar-item-"+t,role:"menuitem"},i.a.createElement("i",{className:e.icon})," ",e.title),i.a.createElement("div",{className:"collapse",id:"sidebar-item-"+t,"data-parent":"#sidebar-group-"+t},i.a.createElement("ul",{className:"navbar-nav"},void 0!==e.children?e.children.map((function(e,a){return void 0===e.condition||!0===e.condition()?i.a.createElement("li",{className:"nav-item nav-item-child",key:"sidebar-item-"+t+"-"+a},void 0===e.action?i.a.createElement(l.b,{to:e.route,className:"nav-link"},i.a.createElement("i",{className:"fa fa-circle-o"})," ",e.title):i.a.createElement("div",{className:"nav-link nav-link-action link-button",onClick:e.action},i.a.createElement("i",{className:"fa fa-circle-o"})," ",e.title)):""})):""))))}))),i.a.createElement("div",{className:"sidebar-bottom"},i.a.createElement("div",{className:"sidebar-fade-bottom"}))))}}]),a}(n.Component)),j=function(){function e(t){Object(d.a)(this,e),this.company=t.company,this.role=t.role}return Object(h.a)(e,[{key:"hasAbilityTo",value:function(e){return void 0!==this.role.abilities.find((function(t){return"*"===t.name||t.name===e}))}}]),e}(),O=k,C=a(94),S=a(95),N=a(59),x=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e,n){var o;return Object(d.a)(this,a),(o=t.call(this,e,n)).errorZone=i.a.createRef(),o.handleShow=o.handleShow.bind(Object(m.a)(o)),o.handleClose=o.handleClose.bind(Object(m.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(m.a)(o)),o.handleExit=o.handleExit.bind(Object(m.a)(o)),o.handleEmailChange=o.handleEmailChange.bind(Object(m.a)(o)),o.handlePasswordChange=o.handlePasswordChange.bind(Object(m.a)(o)),o.testAuthenticationToken=o.testAuthenticationToken.bind(Object(m.a)(o)),o.loginSucceeded=o.loginSucceeded.bind(Object(m.a)(o)),o.loginFailed=o.loginFailed.bind(Object(m.a)(o)),o.handlePasswordChange=o.handlePasswordChange.bind(Object(m.a)(o)),o.validateForm=o.validateForm.bind(Object(m.a)(o)),o.state={show:!1,email:"",password:""},o}return Object(h.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(){var e=this;this.errorZone.current.innerHTML="&nbsp;",this.validateForm()&&window.cache.WebApi.tokens().create({email:this.state.email,password:this.state.password,name:"Frontend Session",grant:"password"}).then((function(t){console.log("handleSubmit response",t),window.cache.auth.access=t.data,window.cache.storage.set("access",window.cache.auth.access),e.testAuthenticationToken(!1)})).catch((function(t){e.errorZone.current.innerHTML=t}))}},{key:"testAuthenticationToken",value:function(e){var t=this;window.cache.WebApi.accounts().find().then((function(e){console.log("testAuthenticationToken",e),window.cache.auth.account=e.data,window.cache.auth.validated=!0,t.loginSucceeded(e)})).catch((function(a){e||t.loginFailed(a)})).finally((function(e){}))}},{key:"loginSucceeded",value:function(e){this.errorZone.current.innerHTML="&nbsp;",window.cache.storage.set("account",window.cache.auth.account),window.location.href="/"}},{key:"loginFailed",value:function(e){window.cache.auth.access=!1,window.cache.auth.validated=!1,window.cache.storage.remove("access"),this.errorZone.current.innerHTML=e}},{key:"validateForm",value:function(){return""!==this.state.email&&""!==this.state.password}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleExit",value:function(){this.handleClose()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(C.a,{show:this.state.show,onHide:this.handleClose,backdrop:"static"},i.a.createElement(C.a.Header,null,i.a.createElement(C.a.Title,null,"Login")),i.a.createElement(C.a.Body,null,i.a.createElement("h4",null,"Please login to continue"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(S.a.Group,{controlId:"email"},i.a.createElement(S.a.Label,null,"Email"),i.a.createElement(S.a.Control,{onChange:this.handleEmailChange,autoFocus:!0})),i.a.createElement(S.a.Group,{controlId:"password"},i.a.createElement(S.a.Label,null,"Password"),i.a.createElement(S.a.Control,{type:"password",onChange:this.handlePasswordChange}))),i.a.createElement("div",{ref:this.errorZone},"\xa0"),i.a.createElement("hr",null)),i.a.createElement(C.a.Footer,null,i.a.createElement(N.a,{onClick:this.handleExit},"Exit"),i.a.createElement(N.a,{onClick:this.handleSubmit,disabled:!this.validateForm(),bsstyle:"info"},"Login"))))}}]),a}(i.a.Component),A=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e,n){var i;return Object(d.a)(this,a),(i=t.call(this,e,n)).handleShow=i.handleShow.bind(Object(m.a)(i)),i.handleClose=i.handleClose.bind(Object(m.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(m.a)(i)),i.handleExit=i.handleExit.bind(Object(m.a)(i)),i.state={show:!1,username:"",password:""},i}return Object(h.a)(a,[{key:"handleSubmit",value:function(){this.refs.errorZone.innerHTML="&nbsp;"}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleExit",value:function(){this.handleClose()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(C.a,{show:this.state.show,onHide:this.handleClose},i.a.createElement(C.a.Header,{closeButton:!0},i.a.createElement(C.a.Title,null,"User inactivity detected")),i.a.createElement(C.a.Body,null,i.a.createElement("h4",null,"You have been inactive for some time"),i.a.createElement("div",{ref:"errorZone"},"\xa0"),i.a.createElement("hr",null)),i.a.createElement(C.a.Footer,null,i.a.createElement(N.a,{onClick:this.handleExit},"Exit"),i.a.createElement(N.a,{onClick:this.handleSubmit,bsStyle:"info"},"Remain logged in"))))}}]),a}(i.a.Component),T=a(92),L=a(93),q=a(64);n.Component;a(85);var M=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).loginModal=i.a.createRef(),n.inactivityModal=i.a.createRef(),n.componentDidMount=n.componentDidMount.bind(Object(m.a)(n)),n.state={_notificationSystem:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){(function(){var e=window.cache.storage.get("access");return console.log("authenticated() access",e),void 0!==e.id})()||this.loginModal.current.handleShow()}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&document.documentElement.classList.toggle("nav-open")}},{key:"isAuthenticated",value:function(){return!0}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(O,this.props),i.a.createElement("div",{className:"content"},i.a.createElement(w,this.props),i.a.createElement(x,{ref:this.loginModal}),i.a.createElement(A,{ref:this.inactivityModal}),i.a.createElement("div",{className:"container-fluid"},i.a.createElement("slot",null),i.a.createElement(E,this.props))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(67),P=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(h.a)(a,[{key:"buildQueryParams",value:function(e){var t=[];if(e)for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return"?"+t.join("&")}},{key:"buildHeaders",value:function(e){var t={Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};return console.log("buildHeaders window.cache.auth.access",window.cache.auth.access),window.cache.auth.access&&window.cache.auth.access.token&&(t.Authorization="Bearer ".concat(window.cache.auth.access.token)),t}},{key:"request",value:function(e,t,a,n,i){t+=this.buildQueryParams(a);var o={method:e,headers:this.buildHeaders()};return"post"!==e&&"put"!==e||(o.body=JSON.stringify(n)),new Promise((function(e,a){fetch("https://api-sandbox.slvrcld.com/v1"+t,o).then((function(t){t.json().then((function(t){return"success"===t.meta.status?e(t):a(t.meta.message)})).catch((function(e){return a(e)}))}))}))}},{key:"accounts",value:function(e,t){var a=this;return{avatars:function(){return{create:function(n,i){return new Promise((function(o,c){a.signedUploads().upload(n,i).then((function(n){a.request("post","/accounts/".concat(e,"/avatars"),t,n.data.data).then((function(e){return o(e)})).catch((function(e){return c(e)}))}))}))}}},create:function(e){return a.request("post","/accounts",t,e)},find:function(){return a.request("get","/accounts",Object(F.a)({},t,{},{include_branding:1}))},notifications:function(t,n){return{get:function(t){return a.request("get","/accounts/".concat(e,"/notifications"),t)},destroy:function(n){return a.request("delete","/accounts/".concat(e,"/notifications/").concat(t),n)},update:function(n,i){return a.request("put","/accounts/".concat(e,"/notifications/").concat(t),i,n)}}},update:function(n){return a.request("post","/accounts/".concat(e),t,n)},subscriptions:function(t){return{update:function(n){return a.request("post","/accounts/".concat(e,"/subscriptions"),t,n)},get:function(t){return a.request("get","/accounts/".concat(e,"/subscriptions"),t)}}}}}},{key:"tokens",value:function(e,t){var a=this;return{create:function(e){return a.request("post","/tokens",t,e)},destroy:function(){return a.request("delete","/tokens/".concat(e),t)},get:function(e){return a.request("get","/tokens",e)},update:function(n){return a.request("patch","/tokens/".concat(e),t)}}}}]),a}(n.Component),H=a(65),R=new(a.n(H).a)({encodingType:"aes"}),W={WebApi:null,WebApiExceptionHandler:null,Websocket:null,WebsocketListener:null,TokenLifeManager:null,Tour:null,branding:{default:{},company:{}},storage:R,auth:{validated:!1,access:R.get("access"),account:R.get("account"),notifications:null,notificationsMeta:{}},config:{LoaderEnabled:!1,ConfettiEnabled:!1,AchievementsEnabled:!1,TranslatorEnabled:!0,WebSocketsEnabled:!1,NotificationsEnabled:!1},transitions:{duration:{enter:300,leave:300},enterClass:"animated fadeIn",leaveClass:"animated fadeOut"},page:{title:!1,icon:!1,loading:!1,fullpage:!1},references:{Loader:null}};W.WebApi=new P,window.cache=W,c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l.a,null,i.a.createElement(r.c,null,i.a.createElement(r.a,{path:"/",name:"Home",component:M})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.8192c9e6.chunk.js.map