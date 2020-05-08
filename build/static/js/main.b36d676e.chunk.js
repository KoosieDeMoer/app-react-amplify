(this["webpackJsonpapp-react"]=this["webpackJsonpapp-react"]||[]).push([[0],{173:function(e){e.exports=JSON.parse('{"en":{"email":"Email","emailInvalid":"Please enter an email address.","passwordRequired":"Please enter password.","dateRequired":"Please enter a date.","loginTitle":"Login","loginSubtitle":"Please login to continue","logout":"Logout","copyright":"Copyright \xa9","overview":"Overview","dashboard":"Dashboard","exit":"Exit","validate":"Validate","submit":"Submit","time":"The time is {t, time, short}.","date":"The date is {d, date}.","inactivityTitle":"User inactivity detected","inactivitySubtitle":"You have been inactive for some time","remainLoggedIn":"Remain logged in"},"es":{"email":"Correo electr\xf3nico","emailInvalid":"Ingrese una direcci\xf3n de correo electr\xf3nico","passwordRequired":"Ingrese la contrase\xf1a","dateRequired":"Ingrese una fecha","loginTitle":"Iniciar sesi\xf3n","loginSubtitle":"Inicie sesi\xf3n para continuar","logout":"Cerrar sesi\xf3n","copyright":"Derechos de autor","overview":"Resumen","dashboard":"Tablero","exit":"Salir","validate":"Validar","submit":"Enviar","time":"La hora es {t, time, short}.","date":"La fecha es {d, date}.","inactivityTitle":"Inactividad del usuario detectada","inactivitySubtitle":"Has estado inactivo por alg\xfan tiempo","remainLoggedIn":"Permanecer conectado"},"fr":{"email":"Email","emailInvalid":"Veuillez saisir une adresse e-mail.","passwordRequired":"Veuillez saisir le mot de passe.","dateRequired":"Veuillez saisir une date.","loginTitle":"Login","loginSubtitle":"Veuillez vous connecter pour continuer","logout":"D\xe9connexion","copyright":"Droits d\'auteur","overview":"Aper\xe7u","dashboard":"Tableau de bord","exit":"Exit","validate":"Valider","submit":"Submit","time":"Il est {t, time, short}.","date":"La date est {d, date}.","inactivityTitle":"Inactivit\xe9 de l\'utilisateur d\xe9tect\xe9e","inactivitySubtitle":"Vous \xeates inactif depuis un certain temps","remainLoggedIn":"Rester connect\xe9"},"de":{"email":"Email","emailInvalid":"Bitte geben Sie eine E-Mail-Adresse ein.","passwordRequired":"Bitte Passwort eingeben.","dateRequired":"Bitte geben Sie ein Datum ein.","loginTitle":"Anmelden","loginSubtitle":"Bitte anmelden, um fortzufahren","logout":"Abmelden","copyright":"Urheberrechte \xa9","overview":"\xdcbersicht","dashboard":"Dashboard","exit":"Exit","validate":"Validieren","submit":"Absenden","time":"Es ist {t, time, short} Uhr.","date":"Das Datum ist {d, date}.","inactivityTitle":"Benutzerinaktivit\xe4t erkannt","inactivitySubtitle":"Sie sind seit einiger Zeit inaktiv","remainLoggedIn":"Angemeldet bleiben"}}')},244:function(e,t,a){e.exports=a(491)},454:function(e,t,a){},455:function(e,t,a){},458:function(e,t,a){},465:function(e,t,a){},466:function(e,t,a){},473:function(e,t,a){},491:function(e,t,a){"use strict";a.r(t),a.d(t,"locale",(function(){return se}));a(245);var n=a(0),i=a.n(n),o=a(53),c=a.n(o),r=a(61),l=a(76),s=a(506),d=(a(453),a(454),a(455),a(89)),u=a.n(d),h=(a(456),a(11)),m=a(12),b=a(7),p=a(14),f=a(15),v=a(142),g=a(507),w=a(508),E=a(505),y=a(498),O=(a(458),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,page:{}},n.changePage=n.changePage.bind(Object(b.a)(n)),n}return Object(m.a)(a,[{key:"changePage",value:function(e){this.setState({page:e})}},{key:"render",value:function(){return void 0!==this.state.page.title&&null!==this.state.page.title?i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 pb-3"},i.a.createElement("div",{className:"no-highlight my-2"},i.a.createElement("i",{className:"fa fa-fw"+(this.state.loading?"fa-spinner fa-pulse fa-pulse-fast":"fa-info-circle")}),i.a.createElement("span",{className:"header-title"},this.state.page.title),null!==this.state.page.refreshFunction&&i.a.createElement("i",{className:"float-right cursor fa fa-refresh"+(this.state.page.loading?"fa-spin fa-spin-fast":""),onClick:this.state.page.refreshFunction})),i.a.createElement("hr",{className:"barely-visible-border mt-1 mb-2"}),null!==this.state.page.description&&i.a.createElement("span",{className:"description-title"},this.state.page.description))):""}}]),a}(n.Component)),j=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={account:window.cache.auth.account,menu:!1},n.titlePageRef=new i.a.createRef,n.handleLogout=n.handleLogout.bind(Object(b.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.titlePage=this.titlePageRef.current}},{key:"handleLogout",value:function(){void 0!==window.cache.auth.access.id?window.cache.WebApi.tokens(window.cache.auth.access.id).destroy().then((function(e){window.cache.auth.access=null,window.cache.storage.set("access",null),window.location.href="/"})).catch((function(e){window.location.href="/"})):window.location.href="/"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g.a,{className:"shadow-vivid fixed-top",id:"navbar-main"},i.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(w.a,{className:"justify-content-end",style:{width:"100%"}},i.a.createElement(E.a,{title:i.a.createElement("span",{className:"align-middle text-sm d-none d-lg-inline-block"},i.a.createElement("span",{className:"font-weight-bolder"},this.state.account.fullname),i.a.createElement("br",null),void 0!==this.state.account.role&&""!==this.state.account.role&&i.a.createElement("span",{className:"font-weight-light"},this.state.account.role.title)),id:"basic-nav-dropdown"},void 0!==this.state.account.company&&i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a.Item,null,this.state.account.company.name),i.a.createElement(E.a.Divider,null)),i.a.createElement(r.b,{to:"/Widgets",className:"dropdown-item"},"Bootstrap"),i.a.createElement(E.a.Divider,null),i.a.createElement(E.a.Item,{onClick:this.handleLogout},i.a.createElement(y.a,{id:"logout"})))))),i.a.createElement("div",{className:"container-fluid bg-secondary pb-2",style:{position:"absolute",marginTop:"80px"}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement(O,{ref:this.titlePageRef,className:"mt-5 pt-5"})))))}}]),a}(n.Component),k=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"row align-items-center justify-content-xl-between"},i.a.createElement("div",{className:"col-xl-6"},i.a.createElement("div",{className:"copyright text-center text-xl-left text-muted"},i.a.createElement(y.a,{id:"copyright"}),"\xa0",(new Date).getFullYear()," ",i.a.createElement("a",{href:"https://www.slvrcld.com",className:"font-weight-bold ml-1",target:"_blank",rel:"noopener noreferrer"},"SLVRCLD BV"),i.a.createElement("br",null))),i.a.createElement("div",{className:"col-xl-6"},i.a.createElement("ul",{className:"nav nav-footer justify-content-center justify-content-xl-end"}))))}}]),a}(n.Component),C=a(234),S=(a(465),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={scrollbarFadeEnabled:!1,scrollbarOptions:{wheelSpeed:.32,minScrollbarLength:500,maxScrollbarLength:500,suppressScrollX:!0,height:"80vh"},user:""!==window.cache.auth.account?new x(window.cache.auth.account):null,items:""!==window.cache.auth.account?n.items():[]},n.scrollbarRef=i.a.createRef(),n.addScrollbarListener=n.addScrollbarListener.bind(Object(b.a)(n)),n.calibrateSizing=n.calibrateSizing.bind(Object(b.a)(n)),n.items=n.items.bind(Object(b.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.calibrateSizing(),this.attachJqueryAccordionCrap()}},{key:"addScrollbarListener",value:function(){}},{key:"calibrateSizing",value:function(){}},{key:"attachJqueryAccordionCrap",value:function(){C.isMobile&&u()("[id^=sidebar-item-]").on("show.bs.collapse",(function(){u()("[id^=sidebar-item-]").each((function(){u()(this).collapse("hide")}))}))}},{key:"items",value:function(){return[{type:"label",titleTextId:"overview"},{type:"link",titleTextId:"dashboard",icon:"fa fa-line-chart",route:"Dashboard"}]}},{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar sidebar navbar-vertical fixed-left navbar-expand-md navbar-light py-sm-3",id:"sidenav-main","data-v-step":"sidebar"},i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("i",{className:"fa fa-bars text-dark text-lg"})),i.a.createElement(r.b,{to:"/home"},i.a.createElement("img",{src:"https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg",alt:"Logo"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"sidenav-collapse-main"},i.a.createElement("div",{className:"navbar-collapse-header d-md-none"},i.a.createElement("div",{className:"row"},i.a.createElement(r.b,{className:"col-6",to:"/home"},i.a.createElement("img",{src:"https://slvrcld-assets.s3.eu-west-1.amazonaws.com/logo-white.svg",alt:"Logo"})),i.a.createElement("div",{className:"col-6 collapse-close"},i.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#sidenav-collapse-main","aria-controls":"sidenav-main","aria-expanded":"false","aria-label":"Toggle sidenav"},i.a.createElement("span",null),i.a.createElement("span",null))))),i.a.createElement("div",{className:" show"}),i.a.createElement("div",{options:this.state.scrollbarOptions,scrollheight:this.state.scrollbarOptions.height,ref:this.scrollbarRef},this.state.items.map((function(e,t){return"group"!==e.type||void 0!==e.condition&&!0!==e.condition()?"link"!==e.type||void 0!==e.condition&&!0!==e.condition()?"label"!==e.type||void 0!==e.condition&&!0!==e.condition()?"":i.a.createElement("div",{key:"sidebar-group-"+t},t>0&&i.a.createElement("hr",{className:"my-3"}),i.a.createElement("h6",{className:"navbar-heading text-muted"},i.a.createElement(y.a,{id:e.titleTextId}))):i.a.createElement("ul",{className:"navbar-nav",key:"sidebar-group-"+t},i.a.createElement("li",{className:"nav-item"},void 0===e.action?i.a.createElement(r.b,{to:e.route,className:"nav-link"},i.a.createElement("i",{className:e.icon}),i.a.createElement(y.a,{id:e.titleTextId})):i.a.createElement("div",{className:"nav-link nav-link-action link-button",onClick:e.action},i.a.createElement("i",{className:e.icon}),i.a.createElement(y.a,{id:e.titleTextId})))):i.a.createElement("ul",{className:"navbar-nav",id:"sidebar-group-"+t,key:"sidebar-group-"+t},i.a.createElement("li",{className:"nav-item"},i.a.createElement("div",{className:"nav-link link-button","data-toggle":"collapse","data-target":"#sidebar-item-"+t,role:"menuitem"},i.a.createElement("i",{className:e.icon}),i.a.createElement(y.a,{id:e.titleTextId})),i.a.createElement("div",{className:"collapse",id:"sidebar-item-"+t,"data-parent":"#sidebar-group-"+t},i.a.createElement("ul",{className:"navbar-nav"},void 0!==e.children?e.children.map((function(e,a){return void 0===e.condition||!0===e.condition()?i.a.createElement("li",{className:"nav-item nav-item-child",key:"sidebar-item-"+t+"-"+a},void 0===e.action?i.a.createElement(r.b,{to:e.route,className:"nav-link"},i.a.createElement("i",{className:"fa fa-circle-o"}),i.a.createElement(y.a,{id:e.titleTextId})):i.a.createElement("div",{className:"nav-link nav-link-action link-button",onClick:e.action},i.a.createElement("i",{className:"fa fa-circle-o"}),i.a.createElement(y.a,{id:e.titleTextId}))):""})):""))))}))),i.a.createElement("div",{className:"sidebar-bottom"},i.a.createElement("div",{className:"sidebar-fade-bottom"}))))}}]),a}(n.Component)),x=function(){function e(t){Object(h.a)(this,e),this.company=t.company,this.role=t.role}return Object(m.a)(e,[{key:"hasAbilityTo",value:function(e){return void 0!==this.role.abilities.find((function(t){return"*"===t.name||t.name===e}))}}]),e}(),T=S,I=a(499),N=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={waiting:!1},n.showWait=n.showWait.bind(Object(b.a)(n)),window.showWait=n.showWait,n}return Object(m.a)(a,[{key:"showWait",value:function(e){this.setState({waiting:e})}},{key:"render",value:function(){return i.a.createElement("div",{style:{height:"100vh",position:"fixed",top:"40%",left:"40%"}},this.state.waiting&&i.a.createElement(I.a,{animation:"border"}))}}]),a}(n.Component),R=a(504),L=a(503),D=a(232),q=(a(466),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e,n){var i;return Object(h.a)(this,a),(i=t.call(this,e,n)).handleShow=i.handleShow.bind(Object(b.a)(i)),i.handleClose=i.handleClose.bind(Object(b.a)(i)),i.handleDismiss=i.handleDismiss.bind(Object(b.a)(i)),i.showError=i.showError.bind(Object(b.a)(i)),i.state={show:!1},i}return Object(m.a)(a,[{key:"handleClose",value:function(){void 0!==this.props.handleClose&&this.props.handleClose(),this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleDismiss",value:function(){void 0!==this.props.handleDismiss&&this.props.handleDismiss(),this.setState({show:!1})}},{key:"showError",value:function(e){window.toaster.show(e,{appearance:"error",autoDismiss:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(L.a,{show:this.state.show,onHide:this.handleClose,backdrop:"static"},this.props.titleTextId&&i.a.createElement(L.a.Header,{closeButton:this.props.closeButton},i.a.createElement(L.a.Title,null,i.a.createElement(y.a,{id:this.props.titleTextId}))),i.a.createElement(L.a.Body,null,this.props.subtitleTextId&&i.a.createElement("h5",null,i.a.createElement(y.a,{id:this.props.subtitleTextId})),this.props.children,i.a.createElement("hr",null)),i.a.createElement(L.a.Footer,null,this.props.dismissButtonTextId&&i.a.createElement(D.a,{onClick:this.handleDismiss},i.a.createElement(y.a,{id:this.props.dismissButtonTextId})),this.props.confirmButtonTextId&&i.a.createElement(D.a,{onClick:this.props.handleConfirm,bsstyle:"info"},i.a.createElement(y.a,{id:this.props.confirmButtonTextId})))))}}]),a}(i.a.Component)),P=a(174);a(467);function F(e){window.showWait(!1),P.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}var A=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(P.a,null)}}]),a}(n.Component),M=a(500),W=a(236),B=a.n(W),V=(a(469),a(470),a(471),a(472),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={date:new Date},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleChange(n.state.date),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState={date:e};var t={target:{name:this.props.name,value:e}};this.props.onChange(t)}},{key:"render",value:function(){var e=this,t=this.state.date;return i.a.createElement(B.a,{options:{locale:se},"data-enable-time":!0,value:t,onChange:function(t){e.handleChange(t[0])}})}}]),a}(n.Component)),z=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(R.a.Group,{controlId:this.props.controlId},i.a.createElement(M.a,null,this.props.labelTextId&&i.a.createElement(R.a.Label,null,i.a.createElement(y.a,{id:this.props.labelTextId})),i.a.createElement(M.a.Prepend,null,i.a.createElement(M.a.Text,null,i.a.createElement("i",{className:"fa "+this.props.iconClass+" text-dark"}))),function(){switch(e.props.type){case"date":return i.a.createElement(V,{value:e.props.value,autoFocus:e.props.autoFocus,required:e.props.required,onChange:e.props.onChange});default:return i.a.createElement(R.a.Control,{type:e.props.type,value:e.props.value,autoFocus:e.props.autoFocus,required:e.props.required,onChange:e.props.onChange})}}(),this.props.invalidFeedbackTextId&&i.a.createElement(R.a.Control.Feedback,{type:"invalid"},i.a.createElement(y.a,{id:this.props.invalidFeedbackTextId}))))}}]),a}(n.Component),H=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e,n){var o;return Object(h.a)(this,a),(o=t.call(this,e,n)).formRef=i.a.createRef(),o.tpRef=i.a.createRef(),o.baseModal=i.a.createRef(),o.handleShow=o.handleShow.bind(Object(b.a)(o)),o.handleEmailChange=o.handleEmailChange.bind(Object(b.a)(o)),o.handlePasswordChange=o.handlePasswordChange.bind(Object(b.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(b.a)(o)),o.testAuthenticationToken=o.testAuthenticationToken.bind(Object(b.a)(o)),o.loginSucceeded=o.loginSucceeded.bind(Object(b.a)(o)),o.loginFailed=o.loginFailed.bind(Object(b.a)(o)),o.state={email:"",password:"",validated:!1},o}return Object(m.a)(a,[{key:"handleShow",value:function(e){this.baseModal.current.handleShow(e)}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({validated:!0}),!1===this.formRef.current.checkValidity()?(e.preventDefault(),e.stopPropagation()):window.cache.WebApi.tokens().create({email:this.state.email,password:this.state.password,name:"Frontend Session",grant:"password"}).then((function(e){window.cache.auth.access=e.data.data,window.cache.storage.set("access",window.cache.auth.access),t.testAuthenticationToken(!1)})).catch((function(e){F(401===e.response.status?"Credentials failed":e.message)}))}},{key:"testAuthenticationToken",value:function(e){var t=this;window.cache.WebApi.accounts().find().then((function(e){console.log("testAuthenticationToken",e),window.cache.auth.account=e.data.data,window.cache.auth.validated=!0,t.loginSucceeded(e)})).catch((function(a){e||t.loginFailed(a)})).finally((function(e){}))}},{key:"loginSucceeded",value:function(e){window.cache.storage.set("account",window.cache.auth.account),window.location.href="/"}},{key:"loginFailed",value:function(e){window.cache.auth.access=!1,window.cache.auth.validated=!1,window.cache.storage.remove("access"),F(e.message)}},{key:"render",value:function(){return i.a.createElement(q,{ref:this.baseModal,titleTextId:"loginTitle",subtitleTextId:"loginSubtitle",dismissButtonTextId:"exit",confirmButtonTextId:"loginTitle",handleConfirm:this.handleSubmit},i.a.createElement(R.a,{ref:this.formRef,noValidate:!0,validated:this.state.validated,onSubmit:this.handleSubmit},i.a.createElement(z,{controlId:"email",type:"email",autoFocus:!0,required:!0,iconClass:"fa-user-o",invalidFeedbackTextId:"emailInvalid",onChange:this.handleEmailChange}),i.a.createElement(z,{controlId:"password",type:"password",required:!0,iconClass:"fa-key",invalidFeedbackTextId:"passwordRequired",onChange:this.handlePasswordChange})))}}]),a}(i.a.Component),U=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e,n){var o;return Object(h.a)(this,a),(o=t.call(this,e,n)).baseModal=i.a.createRef(),o.handleLogout=o.handleLogout.bind(Object(b.a)(o)),o.handleConfirm=o.handleConfirm.bind(Object(b.a)(o)),o}return Object(m.a)(a,[{key:"handleShow",value:function(e){this.baseModal.current.handleShow(e)}},{key:"handleConfirm",value:function(){}},{key:"handleLogout",value:function(){window.cache.WebApi.tokens(window.cache.auth.access.id).destroy().then((function(e){window.cache.auth.access=null,window.cache.storage.set("access",null)})).catch((function(e){F(e.message)}))}},{key:"render",value:function(){return i.a.createElement(q,{ref:this.baseModal,titleTextId:"inactivityTitle",subtitleTextId:"inactivitySubtitle",closeButton:!0,dismissButtonTextId:"exit",confirmButtonTextId:"remainLoggedIn",handleClose:this.handleConfirm,handleDismiss:this.handleLogout,handleConfirm:this.handleConfirm})}}]),a}(i.a.Component),J=a(31),_=a(55),X=a(501),G=a(502),Q=a(237),Y=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).propogateState=n.propogateState.bind(Object(b.a)(n)),n.page=null,n}return Object(m.a)(a,[{key:"propogateState",value:function(){void 0!==window.titlePage&&window.titlePage.setState({page:this})}},{key:"componentDidMount",value:function(){this.propogateState()}}]),a}(n.Component),Z=[{path:"/Dashboard",component:function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),n=t.call(this,e),Object(_.a)(Object(J.a)(a.prototype),"title","Dashboard - Last Refresh: "+window.LocalDate("now").format("nice"),Object(b.a)(n),!0),Object(_.a)(Object(J.a)(a.prototype),"refreshFunction",n.refreshFunction.bind(Object(b.a)(n)),Object(b.a)(n),!0),n}return Object(m.a)(a,[{key:"refreshFunction",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"content"},i.a.createElement(X.a,{fluid:!0},i.a.createElement(G.a,null,i.a.createElement(Q.a,{lg:12,sm:6},"TBD"))))}}]),a}(Y)},{path:"/Widgets",component:function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),n=t.call(this,e),Object(_.a)(Object(J.a)(a.prototype),"title","Widget Gallery - Last Refresh: "+window.LocalDate("now").format("nice"),Object(b.a)(n),!0),n.baseModal=i.a.createRef(),n.formRef=i.a.createRef(),n.state={email:"",password:"",date:"",validated:!1},Object(_.a)(Object(J.a)(a.prototype),"refreshFunction",n.refreshFunction.bind(Object(b.a)(n)),Object(b.a)(n),!0),Object(_.a)(Object(J.a)(a.prototype),"handleEmailChange",n.handleEmailChange.bind(Object(b.a)(n)),Object(b.a)(n),!0),Object(_.a)(Object(J.a)(a.prototype),"handlePasswordChange",n.handlePasswordChange.bind(Object(b.a)(n)),Object(b.a)(n),!0),Object(_.a)(Object(J.a)(a.prototype),"handleDateChange",n.handleDateChange.bind(Object(b.a)(n)),Object(b.a)(n),!0),Object(_.a)(Object(J.a)(a.prototype),"handleValidate",n.handleValidate.bind(Object(b.a)(n)),Object(b.a)(n),!0),Object(_.a)(Object(J.a)(a.prototype),"handleSubmit",n.handleSubmit.bind(Object(b.a)(n)),Object(b.a)(n),!0),n}return Object(m.a)(a,[{key:"refreshFunction",value:function(){}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleDateChange",value:function(e){this.setState({date:e.target.value})}},{key:"handleValidate",value:function(e){this.setState({validated:!0}),this.formRef.current.checkValidity()}},{key:"handleSubmit",value:function(e){this.baseModal.current.handleShow(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"content"},i.a.createElement(q,{ref:this.baseModal,dismissButtonTextId:"exit"},i.a.createElement("pre",null,JSON.stringify(this.state,void 0,4))),i.a.createElement(X.a,{fluid:!0},i.a.createElement(R.a,{ref:this.formRef,noValidate:!0,validated:this.state.validated},i.a.createElement(z,{controlId:"email",type:"email",autoFocus:!0,required:!0,iconClass:"fa-user-o",invalidFeedbackTextId:"emailInvalid",onChange:this.handleEmailChange}),i.a.createElement(z,{controlId:"password",type:"password",required:!0,iconClass:"fa-key",invalidFeedbackTextId:"passwordRequired",onChange:this.handlePasswordChange}),i.a.createElement(z,{controlId:"date",type:"date",required:!0,iconClass:"fa-calendar",invalidFeedbackTextId:"dateRequired",onChange:this.handleDateChange})),i.a.createElement(D.a,{onClick:this.handleValidate},i.a.createElement(y.a,{id:"validate"})),i.a.createElement(D.a,{onClick:this.handleSubmit,bsstyle:"info"},i.a.createElement(y.a,{id:"submit"}))))}}]),a}(Y)}];a(473);var $=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).loginModal=i.a.createRef(),n.inactivityModal=i.a.createRef(),n.componentDidMount=n.componentDidMount.bind(Object(b.a)(n)),n.state={_notificationSystem:null},window.LocalDate=function(e){return Object(v.a)(e,"UTC").goto(Object(v.a)("now").timezone().name)},window.APIDate=function(e){return Object(v.a)(e,"UTC")},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){void 0===window.cache.storage.get("access").id&&this.loginModal.current.handleShow()}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&document.documentElement.classList.toggle("nav-open")}},{key:"isAuthenticated",value:function(){return!0}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(j,this.props),i.a.createElement(T,this.props),i.a.createElement("div",{className:"content"},i.a.createElement(H,{ref:this.loginModal}),i.a.createElement(U,{ref:this.inactivityModal}),i.a.createElement("div",{className:"space-for-header"}),i.a.createElement("div",{className:"container-fluid"},i.a.createElement(l.d,null,Z.map((function(e,t){return e.redirect?i.a.createElement(l.a,{from:e.path,to:e.to,key:t}):i.a.createElement(l.b,{path:e.path,component:e.component,key:t})}))),i.a.createElement("slot",null),i.a.createElement(k,this.props))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(238),ee=new(a.n(K).a)({encodingType:"aes"}),te={WebApi:null,WebApiExceptionHandler:null,Websocket:null,WebsocketListener:null,TokenLifeManager:null,Tour:null,branding:{default:{},company:{}},storage:ee,auth:{validated:!1,access:ee.get("access"),account:ee.get("account"),notifications:null,notificationsMeta:{}},config:{LoaderEnabled:!1,ConfettiEnabled:!1,AchievementsEnabled:!1,TranslatorEnabled:!0,WebSocketsEnabled:!1,NotificationsEnabled:!1},transitions:{duration:{enter:300,leave:300},enterClass:"animated fadeIn",leaveClass:"animated fadeOut"},page:{title:!1,icon:!1,loading:!1,fullpage:!1},references:{Loader:null}},ae=a(239),ne=a(240),ie=a.n(ne),oe=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={},n.client=ie.a.create({baseURL:"https://api-sandbox.slvrcld.com/v1"}),n}return Object(m.a)(a,[{key:"buildQueryParams",value:function(e){var t=[];if(e)for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return"?"+t.join("&")}},{key:"buildHeaders",value:function(e){var t={Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};return window.cache.auth.access&&window.cache.auth.access.token&&(t.Authorization="Bearer ".concat(window.cache.auth.access.token)),t}},{key:"request",value:function(e,t,a,n,i){var o=this;return t+=this.buildQueryParams(a),window.showWait(!0),new Promise((function(a,c){o.client({method:e,url:t,data:n,headers:o.buildHeaders(),uploadProgressHandler:i}).then((function(e){return window.showWait(!1),a(e)})).catch((function(e){return window.showWait(!1),c(e)}))}))}},{key:"accounts",value:function(e,t){var a=this;return{avatars:function(){return{create:function(n,i){return new Promise((function(o,c){a.signedUploads().upload(n,i).then((function(n){a.request("post","/accounts/".concat(e,"/avatars"),t,n.data.data).then((function(e){return o(e)})).catch((function(e){return c(e)}))}))}))}}},create:function(e){return a.request("post","/accounts",t,e)},find:function(){return a.request("get","/accounts",Object(ae.a)({},t,{},{include_branding:1}))},notifications:function(t,n){return{get:function(t){return a.request("get","/accounts/".concat(e,"/notifications"),t)},destroy:function(n){return a.request("delete","/accounts/".concat(e,"/notifications/").concat(t),n)},update:function(n,i){return a.request("put","/accounts/".concat(e,"/notifications/").concat(t),i,n)}}},update:function(n){return a.request("post","/accounts/".concat(e),t,n)},subscriptions:function(t){return{update:function(n){return a.request("post","/accounts/".concat(e,"/subscriptions"),t,n)},get:function(t){return a.request("get","/accounts/".concat(e,"/subscriptions"),t)}}}}}},{key:"tokens",value:function(e,t){var a=this;return{create:function(e){return a.request("post","/tokens",t,e)},destroy:function(){return a.request("delete","/tokens/".concat(e),t)},get:function(e){return a.request("get","/tokens",e)},update:function(n){return a.request("patch","/tokens/".concat(e),t)}}}}]),a}(n.Component),ce=a(173);te.WebApi=new oe,window.cache=te;var re=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,le=re.toLowerCase().split(/[_-]+/)[0],se=Object.keys(ce).includes(le)?le:"en",de=ce[se];c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,{locale:re,messages:de},i.a.createElement(r.a,null,i.a.createElement(l.d,null,i.a.createElement(l.b,{path:"/",name:"Home",component:$}))),i.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[244,1,2]]]);
//# sourceMappingURL=main.b36d676e.chunk.js.map