import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GuitarTypeNames, StringsCount} from '../../const';
import {changeGuitarTypes, changePriceFrom, changePriceTo, changeStringsCount} from '../../store/actions/actions';
import {Button} from '../button/button';
import {InputCheckbox} from '../input-checkbox/input-checkbox';
import {Input} from '../input/input';

const Filters = ({className}) => {
    const dispatch = useDispatch();
    const priceFrom = useSelector(state => state.FILTERS.priceFrom);
    const priceTo = useSelector(state => state.FILTERS.priceTo);
    const minPrice = useSelector(state => state.FILTERS.minPrice);
    const maxPrice = useSelector(state => state.FILTERS.maxPrice);
    const guitarTypes = useSelector(state => state.FILTERS.guitarTypes);
    const stringsCount = useSelector(state => state.FILTERS.stringsCount);

    const onBeginPricesChange = (value) => {
        dispatch(changePriceFrom(Number(value)));
    };

    const onEndPricesChange = (value) => {
        dispatch(changePriceTo(Number(value)));
    };

    const onGuitarTypesChange = (type) => {
        dispatch(changeGuitarTypes(type));
    };

    const onStringsCountChange = (count) => {
        dispatch(changeStringsCount(count));
    };

    const onSubmitButtonClick = () => {
        console.log(priceFrom, priceTo, minPrice, maxPrice);
        console.log(guitarTypes);
        console.log(stringsCount);
    };

    return (
        <div className={`filters ${className}`}>
            <h2 className="filters__title">Фильтр</h2>
            <div className="filters__block price-block">
                <h3 className="filters__title price-block__title">Цена, ₽</h3>
                <Input onChange={(evt) => onBeginPricesChange(evt.target.value)} value={priceFrom} className="price-block__begin" type="number" name="begin-price" placeholder={Number(minPrice).toLocaleString()}/>
                <span className="price-block__line">&nbsp;&mdash;&nbsp;</span>
                <Input onChange={(evt) => onEndPricesChange(evt.target.value)} value={priceTo} className="price-block__end" type="number" name="end-price" placeholder={Number(maxPrice).toLocaleString()}/>
            </div>
            <div className="filters__block type-block">
                <h3 className="filters__title type-block__title">Тип гитар</h3>
                {Object.keys(GuitarTypeNames).map((item, i) => (
                    <InputCheckbox
                        className="type-block__checkbox"
                        key={`guitar-type-${i}`}
                        label={GuitarTypeNames[item]}
                        name={item}
                        onChange={() => onGuitarTypesChange(item)}
                        disabled={false}
                        value={!!guitarTypes.includes(item)}
                    />
                ))}
            </div>
            <div className="filters__block strings-block">
                <h3 className="filters__title strings-block__title">Количество струн</h3>
                {Object.keys(StringsCount).map((item, i) => (
                    <InputCheckbox
                        className="strings-block__checkbox"
                        key={`strings-count-${i}`}
                        label={StringsCount[item]}
                        name={item}
                        onChange={() => onStringsCountChange(StringsCount[item])}
                        disabled={false}
                        value={!!stringsCount.includes(StringsCount[item])}
                    />
                ))}
            </div>
            <Button className="filters__submit" onClick={onSubmitButtonClick} nameButton={String('Показать').toUpperCase()}/>
        </div>
    );
};

Filters.propTypes = {
    className: PropTypes.string.isRequired
};

export {Filters};
