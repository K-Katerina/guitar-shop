import React from 'react';
import {Footer} from '../components/footer/footer';
import {Header} from '../components/header/header';
import {MainCatalog as Main} from '../components/main-catalog/main-catalog';

const Catalog = () => {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>
    );
};

export {Catalog};