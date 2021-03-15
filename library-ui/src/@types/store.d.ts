export as namespace Redux;

export interface Store {
    book: BookType.BookReduxState
}

export interface Action<T> {
    payload: T;
    type: string;
}