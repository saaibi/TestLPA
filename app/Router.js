import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import App from './App';
import NotFound from './NotFound';

import {store} from "./Store";

const Router = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Router;