import React from 'react';
import {AppRoute} from '../../const';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs';

const MainBasket = () => {
    const breadcrumbs = [{title: 'Каталог', url: AppRoute.CATALOG}, {title: 'Оформляем', url: AppRoute.BASKET}];

    return (
        <main className="main wrapper">
            <h1 className="main__title">Корзина</h1>
            <Breadcrumbs list={breadcrumbs} className="main__breadcrumbs"/>
            <div className="main__content basket">

            </div>
        </main>
    );
};

export {MainBasket};
