(this["webpackJsonpapp-react"]=this["webpackJsonpapp-react"]||[]).push([[0],{227:function(e,t,a){e.exports=a(466)},436:function(e,t,a){},437:function(e,t,a){},440:function(e,t,a){},445:function(e,t,a){},448:function(e,t,a){},466:function(e,t,a){"use strict";a.r(t);a(228);var n=a(0),c=a.n(n),o=a(58),i=a.n(o),l=a(70),r=a(69),s=(a(436),a(437),a(80)),u=a.n(s),d=(a(438),a(19)),m=a(20),h=a(9),b=a(21),p=a(22),f=a(127),v=a(477),g=a(478),E=a(476),w=(a(440),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={loading:!1,page:{}},n.changePage=n.changePage.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"changePage",value:function(e){this.setState({page:e}),console.log("changePage this.state.page",this.state.page)}},{key:"render",value:function(){return console.log("this.state.page.title",this.state.page.title),void 0!==this.state.page.title&&null!==this.state.page.title?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 pb-3"},c.a.createElement("div",{className:"no-highlight my-2"},c.a.createElement("i",{className:"fa fa-fw"+(this.state.loading?"fa-spinner fa-pulse fa-pulse-fast":"fa-info-circle")}),c.a.createElement("span",{className:"header-title"},this.state.page.title),null!==this.state.page.refreshFunction&&c.a.createElement("i",{className:"float-right cursor fa fa-refresh"+(this.state.page.loading?"fa-spin fa-spin-fast":""),onClick:this.state.page.refreshFunction})),c.a.createElement("hr",{className:"barely-visible-border mt-1 mb-2"}),null!==this.state.page.description&&c.a.createElement("span",{className:"description-title"},this.state.page.description))):""}}]),a}(n.Component)),y=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={account:window.cache.auth.account,menu:!1},n.titlePageRef=new c.a.createRef,n.logout=n.logout.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.titlePage=this.titlePageRef.current}},{key:"logout",value:function(){window.cache.storage.set("access",null),window.cache.storage.set("account",null),window.location.href="/"}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v.a,{className:"shadow-vivid fixed-top",id:"navbar-main"},c.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(g.a,{className:"justify-content-end",style:{width:"100%"}},c.a.createElement(E.a,{title:c.a.createElement("span",{className:"align-middle text-sm d-none d-lg-inline-block"},c.a.createElement("span",{className:"font-weight-bolder"},this.state.account.fullname),c.a.createElement("br",null),void 0!==this.state.account.role&&""!==this.state.account.role&&c.a.createElement("span",{className:"font-weight-light"},this.state.account.role.title)),id:"basic-nav-dropdown"},void 0!==this.state.account.company&&c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a.Item,null,this.state.account.company.name),c.a.createElement(E.a.Divider,null)),c.a.createElement(E.a.Item,{href:"#action/3.2"},"Bootstrap"),c.a.createElement(E.a.Divider,null),c.a.createElement(E.a.Item,{onClick:this.logout},"Logout"))))),c.a.createElement("div",{className:"container-fluid bg-secondary pb-2",style:{position:"absolute",marginTop:"80px"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(w,{ref:this.titlePageRef,className:"mt-5 pt-5"})))))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"row align-items-center justify-content-xl-between"},c.a.createElement("div",{className:"col-xl-6"},c.a.createElement("div",{className:"copyright text-center text-xl-left text-muted"},"Copyright \xa9 ",(new Date).getFullYear()," ",c.a.createElement("a",{href:"https://www.slvrcld.com",className:"font-weight-bold ml-1",target:"_blank",rel:"noopener noreferrer"},"SLVRCLD BV"),c.a.createElement("br",null))),c.a.createElement("div",{className:"col-xl-6"},c.a.createElement("ul",{className:"nav nav-footer justify-content-center justify-content-xl-end"}))))}}]),a}(n.Component),j=a(218),O=(a(445),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),n=t.call(this,e),console.log("ApplicationNavigation constructor()  window.cache.auth.account",window.cache.auth.account),n.state={scrollbarFadeEnabled:!1,scrollbarOptions:{wheelSpeed:.32,minScrollbarLength:500,maxScrollbarLength:500,suppressScrollX:!0,height:"80vh"},user:""!==window.cache.auth.account?new N(window.cache.auth.account):null,items:""!==window.cache.auth.account?n.items():[]},console.log("ApplicationNavigation constructor() this.state",n.state),n.scrollbarRef=c.a.createRef(),n.addScrollbarListener=n.addScrollbarListener.bind(Object(h.a)(n)),n.calibrateSizing=n.calibrateSizing.bind(Object(h.a)(n)),n.items=n.items.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.calibrateSizing(),this.attachJqueryAccordionCrap()}},{key:"addScrollbarListener",value:function(){}},{key:"calibrateSizing",value:function(){}},{key:"attachJqueryAccordionCrap",value:function(){j.isMobile&&u()("[id^=sidebar-item-]").on("show.bs.collapse",(function(){u()("[id^=sidebar-item-]").each((function(){u()(this).collapse("hide")}))}))}},{key:"items",value:function(){return[{type:"label",title:"Overview"},{type:"link",title:"Dashboard",icon:"fa fa-line-chart",route:"Dashboard"}]}},{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar sidebar navbar-vertical fixed-left navbar-expand-md navbar-light py-sm-3",id:"sidenav-main","data-v-step":"sidebar"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("i",{className:"fa fa-bars text-dark text-lg"})),c.a.createElement(l.b,{to:"/home"},c.a.createElement("img",{src:"https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg",alt:"Logo"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"sidenav-collapse-main"},c.a.createElement("div",{className:"navbar-collapse-header d-md-none"},c.a.createElement("div",{className:"row"},c.a.createElement(l.b,{className:"col-6",to:"/home"},c.a.createElement("img",{src:"https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg",alt:"Logo"})),c.a.createElement("div",{className:"col-6 collapse-close"},c.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle sidenav"},c.a.createElement("span",null),c.a.createElement("span",null))))),c.a.createElement("div",{className:" show"}),c.a.createElement("div",{options:this.state.scrollbarOptions,scrollheight:this.state.scrollbarOptions.height,ref:this.scrollbarRef},this.state.items.map((function(e,t){return"group"!==e.type||void 0!==e.condition&&!0!==e.condition()?"link"!==e.type||void 0!==e.condition&&!0!==e.condition()?"label"!==e.type||void 0!==e.condition&&!0!==e.condition()?"":c.a.createElement("div",{key:"sidebar-group-"+t},t>0&&c.a.createElement("hr",{className:"my-3"}),c.a.createElement("h6",{className:"navbar-heading text-muted"},e.title)):c.a.createElement("ul",{className:"navbar-nav",key:"sidebar-group-"+t},c.a.createElement("li",{className:"nav-item"},void 0===e.action?c.a.createElement(l.b,{to:e.route,className:"nav-link"},c.a.createElement("i",{className:e.icon})," ",e.title):c.a.createElement("div",{className:"nav-link nav-link-action link-button",onClick:e.action},c.a.createElement("i",{className:e.icon})," ",e.title))):c.a.createElement("ul",{className:"navbar-nav",id:"sidebar-group-"+t,key:"sidebar-group-"+t},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:"nav-link link-button","data-toggle":"collapse","data-target":"#sidebar-item-"+t,role:"menuitem"},c.a.createElement("i",{className:e.icon})," ",e.title),c.a.createElement("div",{className:"collapse",id:"sidebar-item-"+t,"data-parent":"#sidebar-group-"+t},c.a.createElement("ul",{className:"navbar-nav"},void 0!==e.children?e.children.map((function(e,a){return void 0===e.condition||!0===e.condition()?c.a.createElement("li",{className:"nav-item nav-item-child",key:"sidebar-item-"+t+"-"+a},void 0===e.action?c.a.createElement(l.b,{to:e.route,className:"nav-link"},c.a.createElement("i",{className:"fa fa-circle-o"})," ",e.title):c.a.createElement("div",{className:"nav-link nav-link-action link-button",onClick:e.action},c.a.createElement("i",{className:"fa fa-circle-o"})," ",e.title)):""})):""))))}))),c.a.createElement("div",{className:"sidebar-bottom"},c.a.createElement("div",{className:"sidebar-fade-bottom"}))))}}]),a}(n.Component)),N=function(){function e(t){Object(d.a)(this,e),this.company=t.company,this.role=t.role}return Object(m.a)(e,[{key:"hasAbilityTo",value:function(e){return void 0!==this.role.abilities.find((function(t){return"*"===t.name||t.name===e}))}}]),e}(),C=O,S=a(474),x=a(475),L=a(217),P=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e,n){var o;return Object(d.a)(this,a),(o=t.call(this,e,n)).errorZone=c.a.createRef(),o.handleShow=o.handleShow.bind(Object(h.a)(o)),o.handleClose=o.handleClose.bind(Object(h.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(h.a)(o)),o.handleExit=o.handleExit.bind(Object(h.a)(o)),o.handleEmailChange=o.handleEmailChange.bind(Object(h.a)(o)),o.handlePasswordChange=o.handlePasswordChange.bind(Object(h.a)(o)),o.testAuthenticationToken=o.testAuthenticationToken.bind(Object(h.a)(o)),o.loginSucceeded=o.loginSucceeded.bind(Object(h.a)(o)),o.loginFailed=o.loginFailed.bind(Object(h.a)(o)),o.handlePasswordChange=o.handlePasswordChange.bind(Object(h.a)(o)),o.validateForm=o.validateForm.bind(Object(h.a)(o)),o.state={show:!1,email:"",password:""},o}return Object(m.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(){var e=this;this.errorZone.current.innerHTML="&nbsp;",this.validateForm()&&window.cache.WebApi.tokens().create({email:this.state.email,password:this.state.password,name:"Frontend Session",grant:"password"}).then((function(t){console.log("handleSubmit response",t),window.cache.auth.access=t.data.data,window.cache.storage.set("access",window.cache.auth.access),e.testAuthenticationToken(!1)})).catch((function(t){e.errorZone.current.innerHTML=t}))}},{key:"testAuthenticationToken",value:function(e){var t=this;window.cache.WebApi.accounts().find().then((function(e){console.log("testAuthenticationToken",e),window.cache.auth.account=e.data.data,window.cache.auth.validated=!0,t.loginSucceeded(e)})).catch((function(a){e||t.loginFailed(a)})).finally((function(e){}))}},{key:"loginSucceeded",value:function(e){this.errorZone.current.innerHTML="&nbsp;",window.cache.storage.set("account",window.cache.auth.account),window.location.href="/"}},{key:"loginFailed",value:function(e){window.cache.auth.access=!1,window.cache.auth.validated=!1,window.cache.storage.remove("access"),this.errorZone.current.innerHTML=e}},{key:"validateForm",value:function(){return""!==this.state.email&&""!==this.state.password}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleExit",value:function(){this.handleClose()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(S.a,{show:this.state.show,onHide:this.handleClose,backdrop:"static"},c.a.createElement(S.a.Header,null,c.a.createElement(S.a.Title,null,"Login")),c.a.createElement(S.a.Body,null,c.a.createElement("h4",null,"Please login to continue"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement(x.a.Group,{controlId:"email"},c.a.createElement(x.a.Label,null,"Email"),c.a.createElement(x.a.Control,{onChange:this.handleEmailChange,autoFocus:!0})),c.a.createElement(x.a.Group,{controlId:"password"},c.a.createElement(x.a.Label,null,"Password"),c.a.createElement(x.a.Control,{type:"password",onChange:this.handlePasswordChange}))),c.a.createElement("div",{ref:this.errorZone},"\xa0"),c.a.createElement("hr",null)),c.a.createElement(S.a.Footer,null,c.a.createElement(L.a,{onClick:this.handleExit},"Exit"),c.a.createElement(L.a,{onClick:this.handleSubmit,disabled:!this.validateForm(),bsstyle:"info"},"Login"))))}}]),a}(c.a.Component),T=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e,n){var c;return Object(d.a)(this,a),(c=t.call(this,e,n)).handleShow=c.handleShow.bind(Object(h.a)(c)),c.handleClose=c.handleClose.bind(Object(h.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(h.a)(c)),c.handleExit=c.handleExit.bind(Object(h.a)(c)),c.state={show:!1,username:"",password:""},c}return Object(m.a)(a,[{key:"handleSubmit",value:function(){this.refs.errorZone.innerHTML="&nbsp;"}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleExit",value:function(){this.handleClose()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(S.a,{show:this.state.show,onHide:this.handleClose},c.a.createElement(S.a.Header,{closeButton:!0},c.a.createElement(S.a.Title,null,"User inactivity detected")),c.a.createElement(S.a.Body,null,c.a.createElement("h4",null,"You have been inactive for some time"),c.a.createElement("div",{ref:"errorZone"},"\xa0"),c.a.createElement("hr",null)),c.a.createElement(S.a.Footer,null,c.a.createElement(L.a,{onClick:this.handleExit},"Exit"),c.a.createElement(L.a,{onClick:this.handleSubmit,bsStyle:"info"},"Remain logged in"))))}}]),a}(c.a.Component),F=a(68),M=a(159),A=a(472),D=a(473),q=a(222),R=[{path:"/Dashboard",component:function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),n=t.call(this,e),Object(M.a)(Object(F.a)(a.prototype),"title","Dashboard - Last Refresh: "+window.LocalDate("now").format("nice"),Object(h.a)(n),!0),Object(M.a)(Object(F.a)(a.prototype),"refreshFunction",n.refreshFunction.bind(Object(h.a)(n)),Object(h.a)(n),!0),n}return Object(m.a)(a,[{key:"refreshFunction",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement(A.a,{fluid:!0},c.a.createElement(D.a,null,c.a.createElement(q.a,{lg:12,sm:6},"TBD"))))}}]),a}(function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).propogateState=n.propogateState.bind(Object(h.a)(n)),n.page=null,n}return Object(m.a)(a,[{key:"propogateState",value:function(){void 0!==window.titlePage&&window.titlePage.setState({page:this})}},{key:"componentDidMount",value:function(){this.propogateState()}}]),a}(n.Component))}];a(448);var H=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).loginModal=c.a.createRef(),n.inactivityModal=c.a.createRef(),n.componentDidMount=n.componentDidMount.bind(Object(h.a)(n)),n.state={_notificationSystem:null},window.LocalDate=function(e){return Object(f.a)(e,"UTC").goto(Object(f.a)("now").timezone().name)},window.APIDate=function(e){return Object(f.a)(e,"UTC")},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(function(){var e=window.cache.storage.get("access");return console.log("authenticated() access",e),void 0!==e.id})()||this.loginModal.current.handleShow()}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&document.documentElement.classList.toggle("nav-open")}},{key:"isAuthenticated",value:function(){return!0}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,this.props),c.a.createElement("div",{className:"content"},c.a.createElement(y,this.props),c.a.createElement(P,{ref:this.loginModal}),c.a.createElement(T,{ref:this.inactivityModal}),c.a.createElement("div",{className:"container-fluid"},c.a.createElement(r.d,null,R.map((function(e,t){return e.redirect?c.a.createElement(r.a,{from:e.path,to:e.to,key:t}):c.a.createElement(r.b,{path:e.path,component:e.component,key:t})}))),c.a.createElement("slot",null),c.a.createElement(k,this.props))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(223),I=a(224),B=a.n(I),z=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n.client=B.a.create({baseURL:"https://api-sandbox.slvrcld.com/v1"}),n}return Object(m.a)(a,[{key:"buildQueryParams",value:function(e){var t=[];if(e)for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return"?"+t.join("&")}},{key:"buildHeaders",value:function(e){var t={Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};return console.log("buildHeaders window.cache.auth.access",window.cache.auth.access),window.cache.auth.access&&window.cache.auth.access.token&&(t.Authorization="Bearer ".concat(window.cache.auth.access.token)),t}},{key:"request",value:function(e,t,a,n,c){return t+=this.buildQueryParams(a),this.client({method:e,url:t,data:n,headers:this.buildHeaders(),uploadProgressHandler:c})}},{key:"accounts",value:function(e,t){var a=this;return{avatars:function(){return{create:function(n,c){return new Promise((function(o,i){a.signedUploads().upload(n,c).then((function(n){a.request("post","/accounts/".concat(e,"/avatars"),t,n.data.data).then((function(e){return o(e)})).catch((function(e){return i(e)}))}))}))}}},create:function(e){return a.request("post","/accounts",t,e)},find:function(){return a.request("get","/accounts",Object(W.a)({},t,{},{include_branding:1}))},notifications:function(t,n){return{get:function(t){return a.request("get","/accounts/".concat(e,"/notifications"),t)},destroy:function(n){return a.request("delete","/accounts/".concat(e,"/notifications/").concat(t),n)},update:function(n,c){return a.request("put","/accounts/".concat(e,"/notifications/").concat(t),c,n)}}},update:function(n){return a.request("post","/accounts/".concat(e),t,n)},subscriptions:function(t){return{update:function(n){return a.request("post","/accounts/".concat(e,"/subscriptions"),t,n)},get:function(t){return a.request("get","/accounts/".concat(e,"/subscriptions"),t)}}}}}},{key:"tokens",value:function(e,t){var a=this;return{create:function(e){return a.request("post","/tokens",t,e)},destroy:function(){return a.request("delete","/tokens/".concat(e),t)},get:function(e){return a.request("get","/tokens",e)},update:function(n){return a.request("patch","/tokens/".concat(e),t)}}}}]),a}(n.Component),U=a(225),Z=new(a.n(U).a)({encodingType:"aes"}),J={WebApi:null,WebApiExceptionHandler:null,Websocket:null,WebsocketListener:null,TokenLifeManager:null,Tour:null,branding:{default:{},company:{}},storage:Z,auth:{validated:!1,access:Z.get("access"),account:Z.get("account"),notifications:null,notificationsMeta:{}},config:{LoaderEnabled:!1,ConfettiEnabled:!1,AchievementsEnabled:!1,TranslatorEnabled:!0,WebSocketsEnabled:!1,NotificationsEnabled:!1},transitions:{duration:{enter:300,leave:300},enterClass:"animated fadeIn",leaveClass:"animated fadeOut"},page:{title:!1,icon:!1,loading:!1,fullpage:!1},references:{Loader:null}};J.WebApi=new z,window.cache=J,i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"/",name:"Home",component:H})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.f436d125.chunk.js.map