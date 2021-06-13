import React from 'react';
import {Footer} from '../components/footer/footer';
import {Header} from '../components/header/header';
import {MainBasket as Main} from '../components/main-basket/main-basket';

const Basket = () => {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>
    );
};

export {Basket};
