export as namespace BookType;

export interface Book {
    isbn: string;
    title: string;
    subtitle: string;
    author: string;
    pages: string;
    description: string;
    website: string;
}
export interface BookReduxState {
    list: Array<Book>;
    selectedBook: Book;
    pagination: ApiResponseType.Pagination;
}

export interface GetBookActionPayload {
    data: Array<Book>;
    metaData: ApiResponseType.Pagination;
}

export interface SearchBookResponse extends ApiResponseType.Response<Array<Book>> {

}

export interface GetBookResponse extends ApiResponseType.Response<Array<Book>>, ApiResponseType.Metadata<ApiResponseType.Pagination> {

}

export interface FindBookResponse extends ApiResponseType.Response<Book> {
    
}