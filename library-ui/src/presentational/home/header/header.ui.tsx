import React from 'react';
import stylesCss from './header.module.scss';
import { Link } from 'react-router-dom';

export const HeaderUI = () => (
    <nav className={stylesCss.header}>
        <div className={stylesCss.heading}>
           Online Library
        </div>
        <ul className={stylesCss.nav_options}>
            <li> <Link to={'/create'}> Add </Link></li>
            <li> <Link to={'/list'}> List</Link></li>
        </ul>
    </nav>
);