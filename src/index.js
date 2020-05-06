import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import { IntlProvider } from 'react-intl'


import "./assets/css/base.css";
import "./assets/css/custom.css";

// to help migration Vue -> React.
// start by using the bootstrap js stuff, data-toggle="collapse"
import 'jquery/dist/jquery.js';
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';

import App from 'containers/App/App';
import * as serviceWorker from 'serviceWorker';
import store from 'Store'
import WebApi from 'components/Global/WebApi'
import Toaster from 'components/Global/Toaster';
import localeData from "assets/lang/localeData.json";


store.WebApi = new WebApi();
// TODO replace window.cache with redux hooks or somesuch 
window.cache = store;

//Define user's language. Different browsers have the user locale defined
//on different fields on the `navigator` object, so we make sure to account
//for these different by checking all of them
const language =
(navigator.languages && navigator.languages[0]) ||
navigator.language ||
navigator.userLanguage;

//Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

const supportedLanguages = Object.keys(localeData);

export const locale = supportedLanguages.includes(languageWithoutRegionCode) ? languageWithoutRegionCode : 'en';

//Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[locale] ;


ReactDOM.render(
  <React.StrictMode>
      <IntlProvider locale={language} messages={messages}>
          <HashRouter>
              <Switch>
                  <Route path="/" name="Home" component={App}/>
              </Switch>
           </HashRouter>
           <Toaster />
      </IntlProvider>
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
