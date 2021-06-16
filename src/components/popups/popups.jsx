import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Button} from '../button/button';
import {Modal} from '../modal/modal';
import electroGuitar3 from '../../assets/electro_1.png';

const Popups = ({onClose, info, children, header}) => {
    return (
        <Modal closeModal={onClose}>
            <article className="popup">
                <h2 className="popup__header">{header}</h2>
                {info &&
                    <div className="popup__info">
                        <div className="popup__wrapper">
                            <img className="popup__img"
                                 src={info.img}
                                 alt="Изображение выбранной гитары"/>
                        </div>
                        <div className="popup__desk">
                            <h3 className="popup__title">{info.title.toUpperCase()}</h3>
                            <span className="popup__vendor-code">Артикул: {info.vendorCode}</span>
                            <span className="popup__type">{info.type}</span>
                            <div className="popup__price">Цена: {info.price}₽</div>
                        </div>
                    </div>
                }
                <div className={`popup__wrapper-buttons ${!info && 'popup__wrapper-buttons--row'}`}>
                    {children}
                </div>
            </article>
        </Modal>
    );
};

const PopupAddToBasket = ({className, onClose, onAddButtonClick}) => (
    <Popups className={`${className} popup--add-to-basket`}
            onClose={onClose}
            header="Добавить товар в корзину"
            info={{
                img: electroGuitar3,
                title: 'electroGuitar3',
                vendorCode: 'AO757599',
                type: 'Электрогитара, 6 струнная',
                price: '13 123'
             }}>
        <Button nameButton="Добавить в корзину" className="add-to-basket-button" onClick={onAddButtonClick}/>
    </Popups>
);

const PopupRemoveFromBasket = ({className, onClose, onRemoveButtonClick}) => (
    <Popups className={`${className} popup--remove-from-basket`}
            onClose={onClose}
            header="Удалить этот товар?"
            info={{
                img: electroGuitar3,
                title: 'electroGuitar3',
                vendorCode: 'AO757599',
                type: 'Электрогитара, 6 струнная',
                price: '23 126'
            }}>
        <Button nameButton="Удалить товар" className="remove-from-basket-button" onClick={onRemoveButtonClick}/>
        <Button nameButton="Продолжить покупки" className="continue-shopping-button" onClick={onClose}/>
    </Popups>
);

const PopupSuccessInBasket = ({className, onClose}) => (
    <Popups className={`${className} popup--success-in-basket`}
            onClose={onClose}
            header="Товар успешно добавлен в корзину"
            >
        <Link to={AppRoute.BASKET} className="go-to-basket-button">Перейти в корзину</Link>
        <Button nameButton="Продолжить покупки" className="continue-shopping-button" onClick={onClose}/>
    </Popups>
);

Popups.propTypes = {
    onClose: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    info: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        vendorCode: PropTypes.string,
        type: PropTypes.string,
        price: PropTypes.string
    }),
    children: PropTypes.arrayOf(PropTypes.object).isRequired
};

PopupAddToBasket.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAddButtonClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

PopupRemoveFromBasket.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRemoveButtonClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
};

PopupSuccessInBasket.propTypes = {
    onClose: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
};

export {PopupAddToBasket, PopupRemoveFromBasket, PopupSuccessInBasket};

