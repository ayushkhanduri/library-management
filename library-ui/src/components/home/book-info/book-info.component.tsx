import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { CardUI } from '../../../presentational';
import styles from './book-info.module.scss';
import { setSelectedBook } from '../../../actions/books.actions';


interface IProps {
    book: BookType.Book
};

type BookInfoProps =  IProps & typeof mapDispatchToProps;

const BookInfoComponent: React.FC<BookInfoProps> = (
    {
        book, setSelectedBook
    }
) => {
    const onCardClicked = useCallback((selectedBook) => {
        setSelectedBook(selectedBook);
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