import React from 'react';
import styles from './equal-container.module.scss';

type IProps = {
    children: React.ReactNode,
    id?: string

};

export const EqualContainer: React.FC<IProps> = ({
    children, id=""
}) => (
    <div id={id} className={styles.equal_height}>
        {
            children
        }
    </div>
)