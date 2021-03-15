import React from 'react';
import styles from './button.module.scss';

interface IProps {
    type: "button" | "submit";
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    text: string,
    className?: string
    disabled?: boolean
}
export const ButtonUI: React.FC<IProps> = (
    {
        type, onClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {}, text, className = "", disabled = false
    }
) => (

        <input disabled={disabled} className={`${ styles.custom_button } ${disabled} ${className}`} type={type} value={text} onClick={onClick}/>
);