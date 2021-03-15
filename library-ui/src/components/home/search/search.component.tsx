import React, { useCallback, useMemo, useState } from 'react';
import { InputUI } from '../../../presentational';
import { debounce } from '../../../shared/utils';


interface IProps {
    onApiCall: (text: string) => void;
} 
export const SearchComponent: React.FC<IProps> = ({
    onApiCall
}) => {
    const [searchText, setSearchText] = useState('');


    const searchBookByText = useCallback( async ([text]) => {
        onApiCall(text);
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
        <InputUI name="searchText" placeholder={'Search by name'} onChange={onChange} value={searchText} />
    )
}