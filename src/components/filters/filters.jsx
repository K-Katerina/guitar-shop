import PropTypes from 'prop-types';
import React from 'react';
import {Button} from '../button/button';

const Filters = ({className}) => {
    return (
        <div className={`filters ${className}`}>
            <h2 className="filters__title">Фильтр</h2>
            <h3 className="filters__title">Цена, ₽</h3>
            <h3 className="filters__title">Тип гитар</h3>
            <h3 className="filters__title">Количество струн</h3>
            <Button className="filters__submit" nameButton="Показать"/>
        </div>
    );
};

Filters.propTypes = {
    className: PropTypes.string.isRequired
};

export {Filters};
