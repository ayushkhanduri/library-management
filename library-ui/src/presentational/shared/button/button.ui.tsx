import React from 'react';
import styles from './button.module.scss';

interface IProps {
    type: "button" | "submit";
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    text: string,
    className?: string
}
export const ButtonUI: React.FC<IProps> = (
    {
        type, onClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {}, text, className
    }
) => (

        <input className={`${ styles.custom_button } ${className}`} type={type} value={text} onClick={onClick}/>
);