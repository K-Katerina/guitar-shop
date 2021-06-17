import {Actions} from '../../const';
import {GUITARS} from '../data';

const initialState = {
    basket: [{guitar: GUITARS[0], count: 14}, {guitar: GUITARS[2], count:2}, {guitar: GUITARS[5], count:1}],
    promoCode: ''
};

const updateElementInArray = (el, count, array) => {
    const index = array.findIndex((it) => it.guitar.id === el.id);
    if (index === -1) {
        return [...array, {guitar: el, count: count}];
    }
    if (count > 0) {
        return [...array.slice(0, index), {guitar: el, count: count}, ...array.slice(index + 1)];
    }
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

const basket = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_BASKET:
            return {
                ...state,
                basket: updateElementInArray(action.payload.guitar, action.payload.count, state.basket)
            };
        case Actions.CHANGE_PROMO_CODE:
            return {
                ...state,
                promoCode: action.payload
            };
        default:
            return state;
    }
};

export {basket};
