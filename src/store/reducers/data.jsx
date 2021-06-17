import {Actions, DEFAULT_PAGE} from '../../const';
import {GUITARS} from '../data';

const initialState = {
    originalGuitars: GUITARS,
    currentGuitars: GUITARS,
    activePage: DEFAULT_PAGE,
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_PAGE:
            return {
                ...state,
                activePage: action.payload
            };
        default:
            return state;
    }
};

export {data};
