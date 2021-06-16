import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button/button';

const getButtonWithPage = (number, activePage) => {
    return (
        <Button className={`button--page pagination__button ${activePage === number && 'pagination__button--active'}`} onClick={()=>{}} nameButton={number}/>
    );
};

const getDots = () => {
    return (
        <span className="pagination__button pagination__button--dots">...</span>
    );
};

const getStartPagination = (activePage) => {
    return (
        <>
            {getButtonWithPage(1, activePage)}
            {(activePage <= 2) && getButtonWithPage(2, activePage)}
        </>
    );
};

const getCenterPagination = (activePage, count) => {
    if (count > 3) {
        return (
            <>
                {activePage >= 3 && getDots()}
                {(activePage > 2 && activePage < count - 1) && getButtonWithPage(activePage, activePage)}
                {activePage < count - 1 && getDots()}
            </>
        );
    }
};

const getEndPagination = (activePage, count) => {
    if (count > 3) {
        return (
            <>
                {(activePage >= count - 1) && getButtonWithPage(count - 1, activePage)}
                {getButtonWithPage(count, activePage)}
            </>
        );
    } else if (count === 3) {
        return (
            <>
                {(activePage ===3) && getButtonWithPage(2, activePage)}
                {getButtonWithPage(count, activePage)}
            </>
        );
    }
};

const Pagination = ({className, count = 7}) => {
    const activePage = 1;

    if (count <= 1) {
       return null;
    }

    return (
        <section className={`pagination ${className}`}>
            {activePage !== 1 && <Button nameButton="Назад" className="pagination__button pagination__button--prev" onClick={()=>{}}/>}

            {getStartPagination(activePage)}
            {getCenterPagination(activePage, count)}
            {getEndPagination(activePage, count)}

            {activePage !== count && <Button nameButton="Далее" className="pagination__button pagination__button--next" onClick={()=>{}}/>}
        </section>
    );
};

Pagination.propTypes = {
    className: PropTypes.string.isRequired,
    count: PropTypes.number
};

export {Pagination};
