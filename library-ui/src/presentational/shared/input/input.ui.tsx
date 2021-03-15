import React from 'react';
import styles from './input.module.scss';

interface IProps  {
    placeholder: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputUI: React.FC<IProps> = ( {
    placeholder = '', onChange = () => {} , value
} ) => {
    return (
        <input type="text" value={value} placeholder={placeholder} onChange={onChange} className={styles.input}/>
    )
}