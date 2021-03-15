import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { CardUI } from '../../../presentational';
import styles from './book-info.module.scss';
import { setSelectedBook } from '../../../actions/books.actions';
import { History } from 'history';
import { ROUTE_CONSTANTS } from '../../../shared/routes.constant';


interface IProps {
    book: BookType.Book,
    history: History
};

type BookInfoProps =  IProps & typeof mapDispatchToProps;

const BookInfoComponent: React.FC<BookInfoProps> = (
    {
        book, setSelectedBook, history
    }
) => {
    console.log(history);
    const onCardClicked = useCallback((selectedBook: BookType.Book) => {
        setSelectedBook(selectedBook);
        history.push(ROUTE_CONSTANTS.update(selectedBook.isbn));
    }, []);
    return (
        <CardUI headerText={book.title} book={book} onCardClicked={onCardClicked}>
            <div className={styles.book_info}> <b>Author: </b>  {book.author}</div>
            <div className={styles.book_info}> <b>Description: </b> {book.description}</div>
            <div className={styles.book_info}> <b>Pages:</b> {book.pages}</div>
        </CardUI>
    );
}
const mapStateToProps = () => ({});

const mapDispatchToProps = {
    setSelectedBook
}

export const BookInfoComponentWrapped = connect(mapStateToProps, mapDispatchToProps)(BookInfoComponent);