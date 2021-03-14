import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getStore } from "./configure-store";

import { createBrowserHistory } from "history";
import { initialState } from '../reducers';
import HomeContainer from '../containers/home.container';

const history = createBrowserHistory();

export const AppRouter = () => {
    return (
        <Provider store={getStore(initialState)}>
            <Router history={history}>
                <Route path='/' component={HomeContainer}></Route>
            </Router>
        </Provider>
    )
}