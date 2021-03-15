import React, { useCallback, useEffect, useState } from 'react';
import { BookInfoComponentWrapped } from '../components';
import { History } from 'history';
import { getAllBookList } from '../actions/books.actions';
import { connect } from 'react-redux';
import { EqualContainer } from '../presentational';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';


type IMapStateToProps = {
    bookList: Array<BookType.Book>,
    pagination: ApiResponseType.Pagination
};

type IMapDispatchToProps = {
    getAllBookList: (num: number) => void;
};

type IProps = {
    history: History
} & IMapStateToProps & IMapDispatchToProps;

const BookList: React.FC<IProps> = (
    {
        history, bookList, getAllBookList, pagination
    }
) => {
    const [pageNumber, setPageNumber] = useState(1);
    const increment = useCallback(() => {
        setPageNumber(previous => previous +1 );
    }, [pageNumber]);

    useInfiniteScroll( 10, increment, pagination?.isLastPage);

    useEffect(() => {
        console.log("Getting data");
        getAllBookList(pageNumber);
    }, [ pageNumber ]);

    return (
        <div className="book-list">
            <p>All Books</p>
            <EqualContainer id="scrollDiv">
                {
                    bookList.map((book,index) => (
                        <BookInfoComponentWrapped key={index} book={book} history={history} />
                    ))
                }
            </EqualContainer>


        </div>
    );
}



const mapStateToProps = (state: Redux.Store): IMapStateToProps => (
    {
        bookList: state.book.list,
        pagination: state.book.pagination
    }
);

const mapDispatchToProps = {
    getAllBookList
}


export const BookListPage = connect(mapStateToProps, mapDispatchToProps)(BookList);