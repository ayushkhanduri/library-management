import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { RootReducer } from '../reducers';

const middleWares = [
    createLogger(),
    thunkMiddleWare
];

let store: Store = null;

export function getStore(initialState: Redux.Store) {
    if (!store) {
        store = createStore(RootReducer,initialState,applyMiddleware(...middleWares));
    }
    return store;
}