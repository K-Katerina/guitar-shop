import {Actions, GuitarType, StringsCount} from '../../const';
import {GUITARS} from '../data';

const getMinimumPrice = (guitars) => guitars.reduce((min, guitar) => guitar.price < min ? guitar.price : min, guitars[0].price);

const getMaximumPrice = (guitars) => guitars.reduce((max, guitar) => guitar.price > max ? guitar.price : max, guitars[0].price);

const initialState = {
    priceFrom: '',
    priceTo: '',
    minPrice: getMinimumPrice(GUITARS),
    maxPrice: getMaximumPrice(GUITARS),
    guitarTypes: [GuitarType.ACOUSTIC, GuitarType.ELECTRO, GuitarType.UKULELE],
    stringsCount: [StringsCount.FOUR, StringsCount.SIX, StringsCount.SEVEN, StringsCount.TWELVE]
};

const updateElementInArray = (el, array) => {
    const index = array.findIndex((it) => it === el);
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
                guitarTypes: updateElementInArray(action.payload, state.guitarTypes)
            };
        case Actions.CHANGE_STRINGS_COUNT:
            return {
                ...state,
                stringsCount: updateElementInArray(action.payload, state.stringsCount)
            };
        default:
            return state;
    }
};

export {filters};
