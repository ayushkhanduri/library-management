import { createStore, applyMiddleware, Store, Action } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { RootReducer } from '../reducers';

const middleWares = [
    createLogger(),
    thunkMiddleWare
];

let store: Store<Redux.Store> = null;

export function getStore(initialState: Redux.Store) {
    if (!store) {
        store = createStore<Redux.Store, Action<any>, unknown, unknown>(RootReducer,initialState,applyMiddleware(...middleWares));
    }
    return store;
}