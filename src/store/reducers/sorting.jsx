import {Actions, SortingTypes} from '../../const';

const initialState = {
    sortingType: null,
    sortingOrder: null,
};

const sorting = (state = initialState, action) => {
    console.log(state.sortingType);
    switch (action.type) {
        case Actions.CHANGE_SORTING_TYPE:
            return {
                ...state,
                sortingType: action.payload
            };
        case Actions.CHANGE_SORTING_ORDER:
            return {
                ...state,
                sortingOrder: action.payload,
                sortingType: state.sortingType ? state.sortingType : SortingTypes.PRICE
            };
        default:
            return state;
    }
};

export {sorting};
