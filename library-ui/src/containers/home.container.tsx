import React from 'react';
import { HeaderUI } from '../presentational/home/header/header.ui';
import { Route } from 'react-router-dom';
import style from './home.container.module.scss';

import { 
    CreateUpdatePage,
    BookListPage,
    HomePage
} from '../page/';

const HomeContainer = () => {
    return (
        <div>
            <HeaderUI />
            <div className={style.container}>
                <Route path='/' exact component={HomePage} />
                <Route path='/create' component={CreateUpdatePage} />
                <Route path='/list' component={BookListPage}/>
            </div>
        </div>
    );
};

export default HomeContainer;