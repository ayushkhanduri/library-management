import React, { useCallback, useState } from 'react';
import { SearchComponent } from '../components';
import { BookInfoComponentWrapped } from '../components/home/book-info/book-info.component';
import { API_CONSTANTS } from '../shared/api.constant';
import { HttpServiceInstance } from '../shared/http.service';

export const HomePage = () =>{
    const [books, setBooks] = useState<BookType.Book[]>([]);
    const onApiCall = useCallback(async (text: string) => {
        const url = API_CONSTANTS.BOOK.FIND(text);
        const response = ( await HttpServiceInstance.get(url) as BookType.SearchBookResponse );
        setBooks(response.data);
    }, []);
    return (
        <div className="home-page">
            <p>Search Your Favourite Book</p>
            <SearchComponent onApiCall={onApiCall}/>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    books.map((book, index) => (
                        <BookInfoComponentWrapped key={index} book={book}/>
                    ))
                }
            </div>
        </div>
        
    )
}