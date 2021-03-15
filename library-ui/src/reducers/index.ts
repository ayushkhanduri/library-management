import { combineReducers } from 'redux';
import { bookReducer as book } from './book.reducer';

export const initialState: Redux.Store = {
    book: {
        list: [],
        selectedBook: null
    }
}

export const RootReducer: any = combineReducers({ book });