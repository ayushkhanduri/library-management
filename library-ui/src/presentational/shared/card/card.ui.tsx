import React from 'react';
import styles from './card.module.scss';

interface IProps {
    children: React.ReactNode;
    headerText: string;
    onCardClicked: (book: BookType.Book) => void;
    book: BookType.Book
}
export const CardUI: React.FC<IProps> = (
    {
        children, headerText, onCardClicked, book
    }
) => {
    return (
        <div className={styles.card} onClick={() => onCardClicked(book)}>
            <div className={styles.card_header}>
                {headerText}
            </div>
            <div className={styles.card_content}>
                {children}
            </div>
        </div>
    )
}