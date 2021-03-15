import { BOOK_ACTIONS } from "../shared/action.constant";

export const setSelectedBook = (book: BookType.Book): Redux.Action<BookType.Book> => (
    {
        type: BOOK_ACTIONS.SET_SELECTED_BOOK,
        payload: book
    }
)