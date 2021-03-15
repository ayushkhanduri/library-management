import React from 'react';
import styles from './error.module.scss';

interface IProps {
    errorMessage: string;
};

export const ErrorUI: React.FC<IProps> = (
    {
        errorMessage
    }
) => (
    <p className={styles.error}>{errorMessage}</p>
)