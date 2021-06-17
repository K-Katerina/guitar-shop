import {Actions, GuitarType, StringsCount} from '../../const';
import {GUITARS} from '../data';

const getMinimumPrice = (guitars) => guitars.reduce((min, guitar) => guitar.price < min ? guitar.price : min, guitars[0].price);

const getMaximumPrice = (guitars) => guitars.reduce((max, guitar) => guitar.price > max ? guitar.price : max, guitars[0].price);

const initialState = {
    priceFrom: getMinimumPrice(GUITARS),
    priceTo: getMaximumPrice(GUITARS),
    minPrice: getMinimumPrice(GUITARS),
    maxPrice: getMaximumPrice(GUITARS),
    guitarType: [GuitarType.ACOUSTIC, GuitarType.ELECTRO, GuitarType.UKULELE],
    stringsCount: [StringsCount.FOUR, StringsCount.SIX, StringsCount.SEVEN, StringsCount.TWELVE]
};

const updateElementInArray = (el, array) => {
    const index = array.findIndex((it) => it.id === el.id);
    if (index === -1) {
        return [...array, el];
    }
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_PRICE_FROM:
            return {
                ...state,
                priceFrom: action.payload
            };
        case Actions.CHANGE_PRICE_TO:
            return {
                ...state,
                priceTo: action.payload
            };
        case Actions.CHANGE_GUITAR_TYPES:
            return {
                ...state,
                guitarType: updateElementInArray(action.payload, ...state.guitarType)
            };
        case Actions.CHANGE_STRINGS_COUNT:
            return {
                ...state,
                stringsCount: updateElementInArray(action.payload, ...state.stringsCount)
            };
        default:
            return state;
    }
};

export {filters};
