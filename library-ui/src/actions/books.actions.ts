import { Dispatch } from "redux";
import { BOOK_ACTIONS } from "../shared/action.constant";
import { API_CONSTANTS } from "../shared/api.constant";
import { HttpServiceInstance } from "../shared/http.service";

export const setSelectedBook = (book: BookType.Book): Redux.Action<BookType.Book> => (
    {
        type: BOOK_ACTIONS.SET_SELECTED_BOOK,
        payload: book
    }
)

export const setBookList = (payload: BookType.GetBookActionPayload):Redux.Action<BookType.GetBookActionPayload> => (
    {
        payload: payload,
        type: BOOK_ACTIONS.SET_BOOK_LIST
    }
);

export const getAllBookList = (pageNumber: number) => async (dispatch: Dispatch<Redux.Action<BookType.GetBookActionPayload>>) => {
    try {
        const response = ( await HttpServiceInstance.get(API_CONSTANTS.BOOK.GET_ALL_PAGINATION(pageNumber)) as BookType.GetBookResponse);
        const payload: BookType.GetBookActionPayload = {
            data: response.data,
            metaData: response.metaData
        }
        dispatch(setBookList(payload));
    } catch (e) {
        console.log(e);
    }
}