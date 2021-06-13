import PropTypes from 'prop-types';
import React from 'react';

const Sorting = ({className}) => {
    return (
        <div className={`sorting ${className}`}>
            <p className="sorting__title">
                Сортировать:&nbsp;
            </p>
            <a>&nbsp;по цене&nbsp;</a>
            <a>&nbsp;по популярности&nbsp;</a>
        </div>
    );
};

Sorting.propTypes = {
    className: PropTypes.string.isRequired
};

export {Sorting};
