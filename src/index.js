//Aquivo central
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import Sobre2 from './Sobre2';
import Usuario from './Usuario';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/sobre2" component={Sobre2} />
            <Route path="/Usuario" component={Usuario} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
// registerServiceWorker();
