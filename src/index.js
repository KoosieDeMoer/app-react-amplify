import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import "./assets/css/base.css";
import "./assets/css/custom.css";

// to help migration Vue -> React.
// start by using the bootstarp js stuff, data-toggle="collapse"
import 'jquery/dist/jquery.js';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import WebApi from './components/Global/WebApi'
import store from './Store'


store.WebApi = new WebApi();
// TODO replace window.cache with redux hooks or somesuch 
window.cache = store;

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <Switch>
              <Route path="/" name="Home" component={App}/>
          </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
