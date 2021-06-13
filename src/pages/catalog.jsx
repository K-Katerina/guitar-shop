import React from 'react';
import {Footer} from '../components/footer/footer';
import {Header} from '../components/header/header';
import {Main} from '../components/main/main';

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
