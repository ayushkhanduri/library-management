import { BOOK_ACTIONS } from "../shared/action.constant"

const initialState: BookType.BookReduxState = {
    list: [],
    selectedBook: null,
    pagination: null
};

export const bookReducer = (state = initialState, action: Redux.Action<Array<BookType.Book> | BookType.Book | BookType.GetBookActionPayload>) => {
    switch (action.type) {
        case BOOK_ACTIONS.SET_SELECTED_BOOK: {
            return {
                ...state,
                selectedBook: action.payload
            }
        }

        case BOOK_ACTIONS.SET_BOOK_LIST: {
            let list = [];
            const { data, metaData } = (action.payload as BookType.GetBookActionPayload);
            if ( metaData.pageNumber === 1) {
                list = [ ...data]
            } else {
                list = [ ...state.list, ...data ];
            }
            return {
                ...state,
                list: list,
                pagination: { ...metaData }
            }
        }

        case BOOK_ACTIONS.RESET_LIST: {
            return {
                ...state,
                list: action.payload,
                pagination: initialState.pagination
            }
        }

        default: {
            return state;
        }
    }
}