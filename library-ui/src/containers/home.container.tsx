import React from 'react';
import { HeaderUI } from '../presentational/home/header/header.ui';
import { Route } from 'react-router-dom';
import style from './home.container.module.scss';

import { 
    CreateUpdatePage,
    BookListPage,
    HomePage
} from '../page/';
import { ROUTE_CONSTANTS } from '../shared/routes.constant';

const HomeContainer = () => {
    return (
        <div>
            <HeaderUI />
            <div className={style.container}>
                <Route path={ROUTE_CONSTANTS.home} exact component={HomePage} />
                <Route path={ROUTE_CONSTANTS.create} component={CreateUpdatePage} />
                <Route path={ROUTE_CONSTANTS.update()} component={CreateUpdatePage} />
                <Route path={ROUTE_CONSTANTS.list} component={BookListPage}/>
            </div>
        </div>
    );
};

export default HomeContainer;