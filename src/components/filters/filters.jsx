import PropTypes from 'prop-types';
import React from 'react';
import {Button} from '../button/button';
import {InputCheckbox} from '../input-checkbox/input-checkbox';
import {Input} from '../input/input';

const Filters = ({className}) => {
    const guitarTypes = ['Акустические гитары', 'Электрогитары', 'Укулеле'];
    const stringsCount = [4, 6, 7, 12];
    return (
        <div className={`filters ${className}`}>
            <h2 className="filters__title">Фильтр</h2>
            <div className="filters__block price-block">
                <h3 className="filters__title price-block__title">Цена, ₽</h3>
                <Input onChange={()=>{}} className="price-block__begin" type="number" name="begin-price" placeholder={Number(1000).toLocaleString()}/>
                <span className="price-block__line">&nbsp;&mdash;&nbsp;</span>
                <Input onChange={()=>{}} className="price-block__end" type="number" name="end-price" placeholder={Number(20000).toLocaleString()}/>
            </div>
            <div className="filters__block type-block">
                <h3 className="filters__title type-block__title">Тип гитар</h3>
                {guitarTypes.map((guitarType, i) => (
                    <InputCheckbox
                        className="type-block__checkbox"
                        key={`guitar-type-${i}`}
                        label={guitarType}
                        value={true}
                        onChange={()=>{}}
                        disabled={false}
                    />
                ))}
            </div>
            <div className="filters__block strings-block">
                <h3 className="filters__title strings-block__title">Количество струн</h3>
                {stringsCount.map((string, i) => (
                    <InputCheckbox
                        className="strings-block__checkbox"
                        key={`strings-count-${i}`}
                        label={string}
                        value={false}
                        onChange={()=>{}}
                        disabled={false}
                    />
                ))}
            </div>
            <Button className="filters__submit" nameButton={String('Показать').toUpperCase()}/>
        </div>
    );
};

Filters.propTypes = {
    className: PropTypes.string.isRequired
};

export {Filters};
