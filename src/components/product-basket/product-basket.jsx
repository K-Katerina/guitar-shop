import PropTypes from 'prop-types';
import React from 'react';
import electroGuitar3 from '../../assets/electro_1.png';
import {ButtonsWithNumber} from '../buttons-with-number/buttons-with-number';
import {CloseButton} from '../close-button/close-button';

const ProductBasket = ({className}) => {
    return (
        <article className={`${className} product-basket`}>
            <CloseButton onClick={()=>{}} className="product-basket__close"/>
            <div className="product-basket__wrapper">
                <img className="product-basket__img"
                     src={electroGuitar3}
                     alt="Гитара"/>
            </div>
            <div className="product-basket__desk">
                <h3 className="product-basket__title">{String('ТИП Честер Bass').toUpperCase()}</h3>
                <span className="product-basket__vendor-code">Артикул: AO757599</span>
                <span className="product-basket__type">Электрогитара, 6 струнная </span>
            </div>
            <div className="product-basket__price">31000₽</div>
            <ButtonsWithNumber className="product-basket__wrapper-buttons" onChange={()=>{}}/>
            <div className="product-basket__total">31000₽</div>
        </article>
    );
};

ProductBasket.propTypes = {
    className: PropTypes.string.isRequired
};

export {ProductBasket};
