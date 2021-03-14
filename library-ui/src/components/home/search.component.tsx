import React, { useCallback, useMemo, useState } from 'react';
import { InputUI } from '../../presentational';
import { debounce } from '../../shared/utils';

export const SearchComponent = () => {
    const [searchText, setSearchText] = useState('');
    const searchBookByText = useCallback( ([text]) => {
    }, [searchText]);

    const searchDebounced = useMemo(() =>{
        return debounce(1000, searchBookByText);
    }, []);
   
    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event;
        setSearchText(value);
        searchDebounced(value);
    }, []);

    
    return (
        <InputUI placeholder={'Search by name'} onChange={onChange} value={searchText} />
    )
}