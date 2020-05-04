(this["webpackJsonpapp-react"]=this["webpackJsonpapp-react"]||[]).push([[0],{142:function(e){e.exports=JSON.parse('{"en":{"email":"Email","emailInvalid":"Please enter an email address.","passwordRequired":"Please enter password.","loginTitle":"Login","loginSubtitle":"Please login to continue","logout":"Logout","copyright":"Copyright","overview":"Overview","dashboard":"Dashboard","exit":"Exit","time":"The time is {t, time, short}.","date":"The date is {d, date}."},"es":{"email":"Correo electr\ufffdnico","emailInvalid":"Ingrese una direcci\ufffdn de correo electr\ufffdnico","passwordRequired":"Ingrese la contrase\ufffda","loginTitle":"Iniciar sesi\ufffdn","loginSubtitle":"Inicie sesi\ufffdn para continuar","logout":"Cerrar sesi\ufffdn","copyright":"Copyright","overview":"Resumen","dashboard":"Tablero","exit":"Salir","time":"La hora es {t, time, short}.","date":"La fecha es {d, date}."},"fr":{"email":"Email","emailInvalid":"Veuillez saisir une adresse e-mail.","passwordRequired":"Veuillez saisir le mot de passe.","loginTitle":"Login","loginSubtitle":"Veuillez vous connecter pour continuer","logout":"D\ufffdconnexion","copyright":"Copyright","overview":"Aper\ufffdu","dashboard":"Tableau de bord","exit":"Exit","time":"Il est {t, time, short}.","date":"La date est {d, date}."},"de":{"email":"Email","emailInvalid":"Bitte geben Sie eine E-Mail-Adresse ein.","passwordRequired":"Bitte Passwort eingeben.","loginTitle":"Anmelden","loginSubtitle":"Bitte anmelden, um fortzufahren","logout":"Abmelden","copyright":"Copyright","overview":"\ufffdbersicht","dashboard":"Dashboard","exit":"Exit","time":"Es ist {t, time, short} Uhr.","date":"Das Datum ist {d, date}."}}')},243:function(e,t,a){e.exports=a(484)},452:function(e,t,a){},453:function(e,t,a){},456:function(e,t,a){},462:function(e,t,a){},464:function(e,t,a){},466:function(e,t,a){},484:function(e,t,a){"use strict";a.r(t);a(244);var n=a(0),i=a.n(n),o=a(52),c=a.n(o),l=a(75),r=a(74),s=a(498),d=(a(452),a(453),a(86)),u=a.n(d),m=(a(454),a(16)),h=a(17),p=a(9),b=a(20),f=a(21),v=a(141),g=a(499),E=a(500),w=a(497),y=a(491),k=(a(456),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,page:{}},n.changePage=n.changePage.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"changePage",value:function(e){this.setState({page:e})}},{key:"render",value:function(){return void 0!==this.state.page.title&&null!==this.state.page.title?i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 pb-3"},i.a.createElement("div",{className:"no-highlight my-2"},i.a.createElement("i",{className:"fa fa-fw"+(this.state.loading?"fa-spinner fa-pulse fa-pulse-fast":"fa-info-circle")}),i.a.createElement("span",{className:"header-title"},this.state.page.title),null!==this.state.page.refreshFunction&&i.a.createElement("i",{className:"float-right cursor fa fa-refresh"+(this.state.page.loading?"fa-spin fa-spin-fast":""),onClick:this.state.page.refreshFunction})),i.a.createElement("hr",{className:"barely-visible-border mt-1 mb-2"}),null!==this.state.page.description&&i.a.createElement("span",{className:"description-title"},this.state.page.description))):""}}]),a}(n.Component)),O=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={account:window.cache.auth.account,menu:!1},n.titlePageRef=new i.a.createRef,n.logout=n.logout.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.titlePage=this.titlePageRef.current}},{key:"logout",value:function(){window.cache.storage.set("access",null),window.cache.storage.set("account",null),window.location.href="/"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g.a,{className:"shadow-vivid fixed-top",id:"navbar-main"},i.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(E.a,{className:"justify-content-end",style:{width:"100%"}},i.a.createElement(w.a,{title:i.a.createElement("span",{className:"align-middle text-sm d-none d-lg-inline-block"},i.a.createElement("span",{className:"font-weight-bolder"},this.state.account.fullname),i.a.createElement("br",null),void 0!==this.state.account.role&&""!==this.state.account.role&&i.a.createElement("span",{className:"font-weight-light"},this.state.account.role.title)),id:"basic-nav-dropdown"},void 0!==this.state.account.company&&i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a.Item,null,this.state.account.company.name),i.a.createElement(w.a.Divider,null)),i.a.createElement(w.a.Item,{href:"#action/3.2"},"Bootstrap"),i.a.createElement(w.a.Divider,null),i.a.createElement(w.a.Item,{onClick:this.logout},i.a.createElement(y.a,{id:"logout"})))))),i.a.createElement("div",{className:"container-fluid bg-secondary pb-2",style:{position:"absolute",marginTop:"80px"}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement(k,{ref:this.titlePageRef,className:"mt-5 pt-5"})))))}}]),a}(n.Component),j=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"row align-items-center justify-content-xl-between"},i.a.createElement("div",{className:"col-xl-6"},i.a.createElement("div",{className:"copyright text-center text-xl-left text-muted"},i.a.createElement(y.a,{id:"copyright"}),"\xa0\xa9 ",(new Date).getFullYear()," ",i.a.createElement("a",{href:"https://www.slvrcld.com",className:"font-weight-bold ml-1",target:"_blank",rel:"noopener noreferrer"},"SLVRCLD BV"),i.a.createElement("br",null))),i.a.createElement("div",{className:"col-xl-6"},i.a.createElement("ul",{className:"nav nav-footer justify-content-center justify-content-xl-end"}))))}}]),a}(n.Component),C=a(233),x=(a(462),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={scrollbarFadeEnabled:!1,scrollbarOptions:{wheelSpeed:.32,minScrollbarLength:500,maxScrollbarLength:500,suppressScrollX:!0,height:"80vh"},user:""!==window.cache.auth.account?new N(window.cache.auth.account):null,items:""!==window.cache.auth.account?n.items():[]},n.scrollbarRef=i.a.createRef(),n.addScrollbarListener=n.addScrollbarListener.bind(Object(p.a)(n)),n.calibrateSizing=n.calibrateSizing.bind(Object(p.a)(n)),n.items=n.items.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.calibrateSizing(),this.attachJqueryAccordionCrap()}},{key:"addScrollbarListener",value:function(){}},{key:"calibrateSizing",value:function(){}},{key:"attachJqueryAccordionCrap",value:function(){C.isMobile&&u()("[id^=sidebar-item-]").on("show.bs.collapse",(function(){u()("[id^=sidebar-item-]").each((function(){u()(this).collapse("hide")}))}))}},{key:"items",value:function(){return[{type:"label",titleTextId:"overview"},{type:"link",titleTextId:"dashboard",icon:"fa fa-line-chart",route:"Dashboard"}]}},{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar sidebar navbar-vertical fixed-left navbar-expand-md navbar-light py-sm-3",id:"sidenav-main","data-v-step":"sidebar"},i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("i",{className:"fa fa-bars text-dark text-lg"})),i.a.createElement(l.b,{to:"/home"},i.a.createElement("img",{src:"https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg",alt:"Logo"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"sidenav-collapse-main"},i.a.createElement("div",{className:"navbar-collapse-header d-md-none"},i.a.createElement("div",{className:"row"},i.a.createElement(l.b,{className:"col-6",to:"/home"},i.a.createElement("img",{src:"https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg",alt:"Logo"})),i.a.createElement("div",{className:"col-6 collapse-close"},i.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle sidenav"},i.a.createElement("span",null),i.a.createElement("span",null))))),i.a.createElement("div",{className:" show"}),i.a.createElement("div",{options:this.state.scrollbarOptions,scrollheight:this.state.scrollbarOptions.height,ref:this.scrollbarRef},this.state.items.map((function(e,t){return"group"!==e.type||void 0!==e.condition&&!0!==e.condition()?"link"!==e.type||void 0!==e.condition&&!0!==e.condition()?"label"!==e.type||void 0!==e.condition&&!0!==e.condition()?"":i.a.createElement("div",{key:"sidebar-group-"+t},t>0&&i.a.createElement("hr",{className:"my-3"}),i.a.createElement("h6",{className:"navbar-heading text-muted"},i.a.createElement(y.a,{id:e.titleTextId}))):i.a.createElement("ul",{className:"navbar-nav",key:"sidebar-group-"+t},i.a.createElement("li",{className:"nav-item"},void 0===e.action?i.a.createElement(l.b,{to:e.route,className:"nav-link"},i.a.createElement("i",{className:e.icon}),i.a.createElement(y.a,{id:e.titleTextId})):i.a.createElement("div",{className:"nav-link nav-link-action link-button",onClick:e.action},i.a.createElement("i",{className:e.icon}),i.a.createElement(y.a,{id:e.titleTextId})))):i.a.createElement("ul",{className:"navbar-nav",id:"sidebar-group-"+t,key:"sidebar-group-"+t},i.a.createElement("li",{className:"nav-item"},i.a.createElement("div",{className:"nav-link link-button","data-toggle":"collapse","data-target":"#sidebar-item-"+t,role:"menuitem"},i.a.createElement("i",{className:e.icon}),i.a.createElement(y.a,{id:e.titleTextId})),i.a.createElement("div",{className:"collapse",id:"sidebar-item-"+t,"data-parent":"#sidebar-group-"+t},i.a.createElement("ul",{className:"navbar-nav"},void 0!==e.children?e.children.map((function(a,n){return void 0===a.condition||!0===a.condition()?i.a.createElement("li",{className:"nav-item nav-item-child",key:"sidebar-item-"+t+"-"+n},void 0===a.action?i.a.createElement(l.b,{to:a.route,className:"nav-link"},i.a.createElement("i",{className:"fa fa-circle-o"}),i.a.createElement(y.a,{id:e.titleTextId})):i.a.createElement("div",{className:"nav-link nav-link-action link-button",onClick:a.action},i.a.createElement("i",{className:"fa fa-circle-o"}),i.a.createElement(y.a,{id:e.titleTextId}))):""})):""))))}))),i.a.createElement("div",{className:"sidebar-bottom"},i.a.createElement("div",{className:"sidebar-fade-bottom"}))))}}]),a}(n.Component)),N=function(){function e(t){Object(m.a)(this,e),this.company=t.company,this.role=t.role}return Object(h.a)(e,[{key:"hasAbilityTo",value:function(e){return void 0!==this.role.abilities.find((function(t){return"*"===t.name||t.name===e}))}}]),e}(),S=x,T=a(496),I=a(495),R=a(232),L=(a(464),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e,n){var i;return Object(m.a)(this,a),(i=t.call(this,e,n)).handleShow=i.handleShow.bind(Object(p.a)(i)),i.handleClose=i.handleClose.bind(Object(p.a)(i)),i.handleExit=i.handleExit.bind(Object(p.a)(i)),i.showError=i.showError.bind(Object(p.a)(i)),i.state={show:!1},i}return Object(h.a)(a,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleExit",value:function(){this.handleClose()}},{key:"showError",value:function(e){window.toaster.show(e,{appearance:"error",autoDismiss:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(I.a,{show:this.state.show,onHide:this.handleClose,backdrop:"static"},i.a.createElement(I.a.Header,null,i.a.createElement(I.a.Title,null,i.a.createElement(y.a,{id:this.props.titleTextId}))),i.a.createElement(I.a.Body,null,i.a.createElement("h5",null,i.a.createElement(y.a,{id:this.props.subtitleTextId})),this.props.children,i.a.createElement("hr",null)),i.a.createElement(I.a.Footer,null,i.a.createElement(R.a,{onClick:this.handleExit},i.a.createElement(y.a,{id:this.props.dismissButtonTextId})),i.a.createElement(R.a,{onClick:this.props.handleConfirm,bsstyle:"info"},i.a.createElement(y.a,{id:this.props.confirmButtonTextId})))))}}]),a}(i.a.Component)),q=a(492),P=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement(T.a.Group,{controlId:this.props.controlId},i.a.createElement(q.a,null,this.props.labelTextId&&i.a.createElement(T.a.Label,null,i.a.createElement(y.a,{id:this.props.labelTextId})),i.a.createElement(q.a.Prepend,null,i.a.createElement(q.a.Text,null,i.a.createElement("i",{className:"fa "+this.props.iconClass+" text-dark"}))),i.a.createElement(T.a.Control,{type:this.props.type,autoFocus:this.props.autoFocus,required:this.props.required,onChange:this.props.onChange}),this.props.invalidFeedbackTextId&&i.a.createElement(T.a.Control.Feedback,{type:"invalid"},i.a.createElement(y.a,{id:this.props.invalidFeedbackTextId}))))}}]),a}(n.Component),D=a(173);a(465);function F(e){D.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}var A=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement(D.a,null)}}]),a}(n.Component),M=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e,n){var o;return Object(m.a)(this,a),(o=t.call(this,e,n)).formRef=i.a.createRef(),o.tpRef=i.a.createRef(),o.baseModal=i.a.createRef(),o.handleShow=o.handleShow.bind(Object(p.a)(o)),o.handleEmailChange=o.handleEmailChange.bind(Object(p.a)(o)),o.handlePasswordChange=o.handlePasswordChange.bind(Object(p.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(p.a)(o)),o.testAuthenticationToken=o.testAuthenticationToken.bind(Object(p.a)(o)),o.loginSucceeded=o.loginSucceeded.bind(Object(p.a)(o)),o.loginFailed=o.loginFailed.bind(Object(p.a)(o)),o.state={email:"",password:"",validated:!1},o}return Object(h.a)(a,[{key:"handleShow",value:function(e){this.baseModal.current.handleShow(e)}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({validated:!0}),!1===this.formRef.current.checkValidity()?(e.preventDefault(),e.stopPropagation()):window.cache.WebApi.tokens().create({email:this.state.email,password:this.state.password,name:"Frontend Session",grant:"password"}).then((function(e){window.cache.auth.access=e.data.data,window.cache.storage.set("access",window.cache.auth.access),t.testAuthenticationToken(!1)})).catch((function(e){F(401===e.response.status?"Credentials failed":e.message)}))}},{key:"testAuthenticationToken",value:function(e){var t=this;window.cache.WebApi.accounts().find().then((function(e){console.log("testAuthenticationToken",e),window.cache.auth.account=e.data.data,window.cache.auth.validated=!0,t.loginSucceeded(e)})).catch((function(a){e||t.loginFailed(a)})).finally((function(e){}))}},{key:"loginSucceeded",value:function(e){window.cache.storage.set("account",window.cache.auth.account),window.location.href="/"}},{key:"loginFailed",value:function(e){window.cache.auth.access=!1,window.cache.auth.validated=!1,window.cache.storage.remove("access"),F(e.message)}},{key:"render",value:function(){return i.a.createElement(L,{ref:this.baseModal,titleTextId:"loginTitle",subtitleTextId:"loginSubtitle",dismissButtonTextId:"exit",confirmButtonTextId:"loginTitle",handleConfirm:this.handleSubmit},i.a.createElement(T.a,{ref:this.formRef,noValidate:!0,validated:this.state.validated,onSubmit:this.handleSubmit},i.a.createElement(P,{controlId:"email",type:"email",autoFocus:!0,required:!0,iconClass:"fa-user-o",invalidFeedbackTextId:"emailInvalid",onChange:this.handleEmailChange}),i.a.createElement(P,{controlId:"password",type:"password",required:!0,iconClass:"fa-key",invalidFeedbackTextId:"passwordRequired",onChange:this.handlePasswordChange})))}}]),a}(i.a.Component),B=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e,n){var i;return Object(m.a)(this,a),(i=t.call(this,e,n)).handleShow=i.handleShow.bind(Object(p.a)(i)),i.handleClose=i.handleClose.bind(Object(p.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i.handleExit=i.handleExit.bind(Object(p.a)(i)),i.state={show:!1,username:"",password:""},i}return Object(h.a)(a,[{key:"handleSubmit",value:function(){this.refs.errorZone.innerHTML="&nbsp;"}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleExit",value:function(){this.handleClose()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(I.a,{show:this.state.show,onHide:this.handleClose},i.a.createElement(I.a.Header,{closeButton:!0},i.a.createElement(I.a.Title,null,"User inactivity detected")),i.a.createElement(I.a.Body,null,i.a.createElement("h4",null,"You have been inactive for some time"),i.a.createElement("div",{ref:"errorZone"},"\xa0"),i.a.createElement("hr",null)),i.a.createElement(I.a.Footer,null,i.a.createElement(R.a,{onClick:this.handleExit},"Exit"),i.a.createElement(R.a,{onClick:this.handleSubmit,bsStyle:"info"},"Remain logged in"))))}}]),a}(i.a.Component),z=a(72),H=a(174),W=a(493),U=a(494),V=a(236),J=[{path:"/Dashboard",component:function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),n=t.call(this,e),Object(H.a)(Object(z.a)(a.prototype),"title","Dashboard - Last Refresh: "+window.LocalDate("now").format("nice"),Object(p.a)(n),!0),Object(H.a)(Object(z.a)(a.prototype),"refreshFunction",n.refreshFunction.bind(Object(p.a)(n)),Object(p.a)(n),!0),n}return Object(h.a)(a,[{key:"refreshFunction",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"content"},i.a.createElement(W.a,{fluid:!0},i.a.createElement(U.a,null,i.a.createElement(V.a,{lg:12,sm:6},"TBD"))))}}]),a}(function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).propogateState=n.propogateState.bind(Object(p.a)(n)),n.page=null,n}return Object(h.a)(a,[{key:"propogateState",value:function(){void 0!==window.titlePage&&window.titlePage.setState({page:this})}},{key:"componentDidMount",value:function(){this.propogateState()}}]),a}(n.Component))}];a(466);var _=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).loginModal=i.a.createRef(),n.inactivityModal=i.a.createRef(),n.componentDidMount=n.componentDidMount.bind(Object(p.a)(n)),n.state={_notificationSystem:null},window.LocalDate=function(e){return Object(v.a)(e,"UTC").goto(Object(v.a)("now").timezone().name)},window.APIDate=function(e){return Object(v.a)(e,"UTC")},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){void 0===window.cache.storage.get("access").id&&this.loginModal.current.handleShow()}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&document.documentElement.classList.toggle("nav-open")}},{key:"isAuthenticated",value:function(){return!0}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(O,this.props),i.a.createElement(S,this.props),i.a.createElement("div",{className:"content"},i.a.createElement(M,{ref:this.loginModal}),i.a.createElement(B,{ref:this.inactivityModal}),i.a.createElement("div",{className:"space-for-header"}),i.a.createElement("div",{className:"container-fluid"},i.a.createElement(r.d,null,J.map((function(e,t){return e.redirect?i.a.createElement(r.a,{from:e.path,to:e.to,key:t}):i.a.createElement(r.b,{path:e.path,component:e.component,key:t})}))),i.a.createElement("slot",null),i.a.createElement(j,this.props))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(237),Q=new(a.n(X).a)({encodingType:"aes"}),Y={WebApi:null,WebApiExceptionHandler:null,Websocket:null,WebsocketListener:null,TokenLifeManager:null,Tour:null,branding:{default:{},company:{}},storage:Q,auth:{validated:!1,access:Q.get("access"),account:Q.get("account"),notifications:null,notificationsMeta:{}},config:{LoaderEnabled:!1,ConfettiEnabled:!1,AchievementsEnabled:!1,TranslatorEnabled:!0,WebSocketsEnabled:!1,NotificationsEnabled:!1},transitions:{duration:{enter:300,leave:300},enterClass:"animated fadeIn",leaveClass:"animated fadeOut"},page:{title:!1,icon:!1,loading:!1,fullpage:!1},references:{Loader:null}},Z=a(238),G=a(239),$=a.n(G),K=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n.client=$.a.create({baseURL:"https://api-sandbox.slvrcld.com/v1"}),n}return Object(h.a)(a,[{key:"buildQueryParams",value:function(e){var t=[];if(e)for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return"?"+t.join("&")}},{key:"buildHeaders",value:function(e){var t={Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};return window.cache.auth.access&&window.cache.auth.access.token&&(t.Authorization="Bearer ".concat(window.cache.auth.access.token)),t}},{key:"request",value:function(e,t,a,n,i){return t+=this.buildQueryParams(a),this.client({method:e,url:t,data:n,headers:this.buildHeaders(),uploadProgressHandler:i})}},{key:"accounts",value:function(e,t){var a=this;return{avatars:function(){return{create:function(n,i){return new Promise((function(o,c){a.signedUploads().upload(n,i).then((function(n){a.request("post","/accounts/".concat(e,"/avatars"),t,n.data.data).then((function(e){return o(e)})).catch((function(e){return c(e)}))}))}))}}},create:function(e){return a.request("post","/accounts",t,e)},find:function(){return a.request("get","/accounts",Object(Z.a)({},t,{},{include_branding:1}))},notifications:function(t,n){return{get:function(t){return a.request("get","/accounts/".concat(e,"/notifications"),t)},destroy:function(n){return a.request("delete","/accounts/".concat(e,"/notifications/").concat(t),n)},update:function(n,i){return a.request("put","/accounts/".concat(e,"/notifications/").concat(t),i,n)}}},update:function(n){return a.request("post","/accounts/".concat(e),t,n)},subscriptions:function(t){return{update:function(n){return a.request("post","/accounts/".concat(e,"/subscriptions"),t,n)},get:function(t){return a.request("get","/accounts/".concat(e,"/subscriptions"),t)}}}}}},{key:"tokens",value:function(e,t){var a=this;return{create:function(e){return a.request("post","/tokens",t,e)},destroy:function(){return a.request("delete","/tokens/".concat(e),t)},get:function(e){return a.request("get","/tokens",e)},update:function(n){return a.request("patch","/tokens/".concat(e),t)}}}}]),a}(n.Component),ee=a(142);Y.WebApi=new K,window.cache=Y;var te=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,ae=ee[te.toLowerCase().split(/[_-]+/)[0]]||ee[te]||ee.en;c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,{locale:te,messages:ae},i.a.createElement(l.a,null,i.a.createElement(r.d,null,i.a.createElement(r.b,{path:"/",name:"Home",component:_}))),i.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[243,1,2]]]);
//# sourceMappingURL=main.6746e9c0.chunk.js.map