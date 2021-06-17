import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';
import {ProductCard} from '../product-card/product-card';
import {Sorting} from '../sorting/sorting';

const CatalogBlock = ({className}) => {
    const guitars =  useSelector(state => state.DATA.currentGuitars);

    return (
        <div className={`catalog-block ${className}`}>
            <h2 className="visually-hidden">Список гитар</h2>
            <Sorting className="catalog-block__sorting"/>
            <div className="products">
                {
                    guitars.map((guitar) =>
                        <ProductCard key={guitar.id} className="products__item" item={guitar}/>
                    )
                }
            </div>
        </div>
    );
};

CatalogBlock.propTypes = {
    className: PropTypes.string.isRequired
};

export {CatalogBlock};
