import React from 'react';
import {AppRoute} from '../../const';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs';

const MainCatalog = () => {
    const breadcrumbs = [{title: 'Каталог', url: AppRoute.CATALOG}];

    return (
        <main className="main wrapper">
            <h1 className="main__title">Каталог гитар</h1>
            <Breadcrumbs list={breadcrumbs} className="main__breadcrumbs"/>
            <div className="main__content catalog">
                {/*<Filters className="main__filters"/>*/}
                {/*<CatalogBlock className="main__catalog"/>*/}
            </div>
        </main>
    );
};

export {MainCatalog};
