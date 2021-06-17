import {Actions} from '../../const';

const initialState = {
    popupAddToBasketIsOpen: false,
    popupRemoveFromBasketIsOpen: false,
    popupSuccessInBasketIsOpen: false,
};

const popups = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_VISIBILITY_POPUP_ADD_TO_BASKET:
            return {
                ...state,
                popupAddToBasketIsOpen: action.payload,
                popupRemoveFromBasketIsOpen: false,
                popupSuccessInBasketIsOpen: false,
            };
        case Actions.CHANGE_VISIBILITY_POPUP_REMOVE_FROM_BASKET:
            return {
                ...state,
                popupAddToBasketIsOpen: false,
                popupRemoveFromBasketIsOpen: action.payload,
                popupSuccessInBasketIsOpen: false,
            };
        case Actions.CHANGE_VISIBILITY_POPUP_SUCCESS_IN_BASKET:
            return {
                ...state,
                popupAddToBasketIsOpen: false,
                popupRemoveFromBasketIsOpen: false,
                popupSuccessInBasketIsOpen: action.payload,
            };
        default:
            return state;
    }
};

export {popups};
