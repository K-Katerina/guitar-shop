import PropTypes from 'prop-types';
import React from 'react';
import {ProductCard} from '../product-card/product-card';
import {Sorting} from '../sorting/sorting';

const CatalogBlock = ({className}) => {
    return (
        <div className={`catalog-block ${className}`}>
            <h2 className="visually-hidden">Список гитар</h2>
            <Sorting className="catalog-block__sorting"/>

            <div className="products">
                <ProductCard className="products__item"/>
                <ProductCard className="products__item"/>
                <ProductCard className="products__item"/>
                <ProductCard className="products__item"/>
                <ProductCard className="products__item"/>
                <ProductCard className="products__item"/>
                <ProductCard className="products__item"/>
                <ProductCard className="products__item"/>

            </div>
        </div>
    );
};

CatalogBlock.propTypes = {
    className: PropTypes.string.isRequired
};

export {CatalogBlock};
