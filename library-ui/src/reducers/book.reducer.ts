import { BOOK_ACTIONS } from "../shared/action.constant"

const initialState: BookType.BookReduxState = {
    list: [],
    selectedBook: null
}
export const bookReducer = (state = initialState, action: Redux.Action<Array<BookType.Book>| BookType.Book>) => {
    switch( action.type ) {
        case BOOK_ACTIONS.SET_SELECTED_BOOK: {
            return {
                ...state,
                selectedBook: action.payload 
            }
        }

        case BOOK_ACTIONS.SET_BOOK_LIST: {
            return {
                ...state,
                list: action.payload 
            }
        }
        default: {
            return state;
        }
    }
}