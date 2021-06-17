import {Actions, SortingOrder, SortingType} from '../../const';

const initialState = {
    sortingType: [SortingType.POPULAR],
    sortingOrder: [SortingOrder.TO_LOW],
};

const sorting = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_SORTING_TYPE:
            return {
                ...state,
                sortingType: action.payload
            };
        case Actions.CHANGE_SORTING_ORDER:
            return {
                ...state,
                sortingOrder: action.payload
            };
        default:
            return state;
    }
};

export {sorting};
