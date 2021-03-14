import React, { useCallback, useState } from 'react';
import { SearchComponent } from '../components';
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
        <div>
            <p>Search Your Favourite Book</p>
            <SearchComponent onApiCall={onApiCall}/>
        </div>
        
    )
}