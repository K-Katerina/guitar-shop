import PropTypes from 'prop-types';
import React from 'react';
import {GuitarTypeNames} from '../../const';
import {GuitarAuthorPropType} from '../../store/data';
import {ButtonsWithNumber} from '../buttons-with-number/buttons-with-number';
import {CloseButton} from '../close-button/close-button';

const ProductBasket = ({className, item, count}) => {
    const {vendorCode, name, type, stringsCount, price, image} = item;

    return (
        <article className={`${className} product-basket`}>
            <CloseButton onClick={()=>{}} className="product-basket__close"/>
            <div className="product-basket__wrapper">
                <img className="product-basket__img"
                     src={image}
                     alt={name}/>
            </div>
            <div className="product-basket__desk">
                <h3 className="product-basket__title">{String(`${GuitarTypeNames[type]} ${name}`).toUpperCase()}</h3>
                <span className="product-basket__vendor-code">Артикул: {vendorCode}</span>
                <span className="product-basket__type">{GuitarTypeNames[type]}, {stringsCount}-струнная</span>
            </div>
            <div className="product-basket__price">{price.toLocaleString()} ₽</div>
            <ButtonsWithNumber className="product-basket__wrapper-buttons" onChange={()=>{}} value={count}/>
            <div className="product-basket__total">{(price * count).toLocaleString()} ₽</div>
        </article>
    );
};

ProductBasket.propTypes = {
    className: PropTypes.string.isRequired,
    item: GuitarAuthorPropType,
    count: PropTypes.number,
};

export {ProductBasket};
