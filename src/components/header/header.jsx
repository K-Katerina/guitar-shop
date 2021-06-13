import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {ReactComponent as IconMap} from './icon-map.svg';
import {ReactComponent as IconSearch} from './icon-search.svg';
import {ReactComponent as IconBasket} from './icon-basket.svg';
import {Logo} from '../logo/logo';

const Header = () => {
    const basketItemsCount = 2;

    return (
        <header className="header">
            <nav className="header__navigation menu wrapper">
                <Logo className="menu__logo"/>

                <ul className="menu__list header-list">
                    <li className="header-list__item">
                        <Link to={AppRoute.CATALOG} className="header-list__link">Каталог</Link>
                    </li>
                    <li className="header-list__item">
                        <a href="#" className="header-list__link">Где купить?</a>
                    </li>
                    <li className="header-list__item">
                        <a href="#" className="header-list__link">О компании</a>
                    </li>
                    <li className="header-list__item">
                        <a href="#" className="header-list__link">Сервис-центры</a>
                    </li>
                </ul>

                <ul className="menu__navigation navigation">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <IconMap alt="Карта" className="navigation__icon navigation__icon--map"/>
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <IconSearch alt="Поиск" className="navigation__icon navigation__icon--search" />
                        </a>
                    </li>
                    <li className="navigation__item">
                        <Link to={AppRoute.BASKET} className="navigation__link navigation__link--basket">
                            <IconBasket alt="Корзина" className="navigation__icon navigation__icon--basket" />
                        </Link>
                        {basketItemsCount > 0 && <span className="navigation__basket-items-count">{basketItemsCount}</span>}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export {Header};