export const AppRoute = {
    CATALOG: '/',
    BASKET: '/basket',
    ROOT: '/'
};

export const Actions = {
    CHANGE_BASKET: 'CHANGE_BASKET',
    CHANGE_GUITAR_TYPES: 'CHANGE_GUITAR_TYPES',
    CHANGE_PAGE: 'CHANGE_PAGE',
    CHANGE_PRICE_FROM: 'CHANGE_PRICE_FROM',
    CHANGE_PRICE_TO: 'CHANGE_PRICE_TO',
    CHANGE_STRINGS_COUNT: 'CHANGE_STRINGS_COUNT',
    CHANGE_VISIBILITY_POPUP_ADD_TO_BASKET: 'CHANGE_VISIBILITY_POPUP_ADD_TO_BASKET',
    CHANGE_VISIBILITY_POPUP_REMOVE_FROM_BASKET: 'CHANGE_VISIBILITY_POPUP_REMOVE_FROM_BASKET',
    CHANGE_VISIBILITY_POPUP_SUCCESS_IN_BASKET: 'CHANGE_VISIBILITY_POPUP_SUCCESS_IN_BASKET',
    CHANGE_SORTING_TYPE: 'CHANGE_SORTING_TYPE',
    CHANGE_SORTING_ORDER: 'CHANGE_SORTING_ORDER',
};

export const ESC_CODE = 27;

export const DEFAULT_PAGE = 1;

export const GuitarType = {
    ELECTRO: 'ELECTRO',
    UKULELE: 'UKULELE',
    ACOUSTIC: 'ACOUSTIC'
};

export const GuitarTypeNames = {
    ELECTRO: 'Электрогитара',
    UKULELE: 'Укулеле',
    ACOUSTIC: 'Акустическая гитара'
};

export const StringsCount = {
    FOUR: '4',
    SIX: '6',
    SEVEN: '7',
    TWELVE: '12'
};

export const SortingType = {
    PRICE: 'PRICE',
    POPULAR: 'POPULAR',
};

export const SortingOrder = {
    TO_LOW: 'high to low',
    TO_HIGH: 'low to high',
};
