import { combineReducers } from 'redux';

export const initialState: Redux.Store = {
    book: {
        list: [],
        selectedBook: null
    },
    search: ""
}

export const RootReducer = combineReducers({});