export as namespace BookType;

export interface Book {
    isbn: string;
    title: string;
    subtitle: string;
    author: string,
    pages: string;
    description: string;
    website: string
}
export interface BookReduxState {
    list: Array<Book>,
    selectedBook: Book
}

export interface SearchBookResponse extends ApiResponseType.Response<Array<Book>> {

}

export interface FindBookResponse extends ApiResponseType.Response<Book> {
    
}