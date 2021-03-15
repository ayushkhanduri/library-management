import React, { useCallback, useState } from 'react';
import { SearchComponent } from '../components';
import { BookInfoComponentWrapped } from '../components';
import { API_CONSTANTS } from '../shared/api.constant';
import { HttpServiceInstance } from '../shared/http.service';
import { History } from 'history';

type IProps =  {
    history: History 
};

export const HomePage: React.FC<IProps> = (
    {
        history
    }
) =>{
    const [books, setBooks] = useState<BookType.Book[]>([]);
    const onApiCall = useCallback(async (text: string) => {
        const url = API_CONSTANTS.BOOK.SEARCH(text);
        try {
            const response = ( await HttpServiceInstance.get(url) as BookType.SearchBookResponse );
            setBooks(response.data);
        } catch (e) {
            console.error(e);
        }
    }, []);
    return (
        <div className="home-page">
            <p>Search Your Favourite Book</p>
            <SearchComponent onApiCall={onApiCall}/>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    books.map((book,index) => (
                        <BookInfoComponentWrapped key={book.isbn} book={book} history={history}/>
                    ))
                }
            </div>
        </div>
        
    )
}