import React from 'react';
import { ErrorUI } from '../error/error.ui';
import styles from './input.module.scss';

interface IProps  {
    placeholder: string;
    value: string;
    name: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string
}
export const InputUI: React.FC<IProps> = ( {
    placeholder = '', onChange = () => {} , value, name, errorMessage=""
} ) => {
    return (
        <div className={styles.form_group}>
            <input name={name} type="text" value={value||""} placeholder={placeholder} onChange={onChange} className={styles.input}/>
            { errorMessage && <ErrorUI errorMessage={errorMessage}></ErrorUI>}
        </div>
    )
}