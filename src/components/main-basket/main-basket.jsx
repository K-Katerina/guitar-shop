import React from 'react';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs';
import {Button} from '../button/button';
import {Input} from '../input/input';
import {ProductBasket} from '../product-basket/product-basket';

const getTotalSum = (basket) => basket.reduce((sum, item) => (item.guitar.price * item.count) + sum, 0);

const MainBasket = () => {
    const breadcrumbs = [{title: 'Каталог', url: AppRoute.CATALOG}, {title: 'Оформляем', url: AppRoute.BASKET}];
    const basket =  useSelector(state => state.BASKET.basket);

    return (
        <main className="main wrapper">
            <h1 className="main__title main__title--basket">Корзина</h1>
            <Breadcrumbs list={breadcrumbs} className="main__breadcrumbs breadcrumbs--basket"/>
            <div className="main__content basket">
                {
                    basket.map((item) =>
                        <ProductBasket key={item.guitar.id} className="basket__item" item={item.guitar} count={item.count}/>
                    )
                }
            </div>
            <section className="main__summary">
                <div className="summary__wrapper promocode">
                    <h3 className="promocode__title">Промокод на скидку</h3>
                    <p className="promocode__desc">Введите свой промокод, если он у вас есть.</p>

                    <div className="promocode__wrapper">
                        <Input
                            className="promocode__input"
                            type="text"
                            name="promocode"
                            onChange={()=>{}}
                        />
                        <Button
                            onClick={()=>{}}
                            className="promocode__button"
                            type="button"
                            nameButton="Применить купон"
                        />
                        {false && 'Ошибка'}
                    </div>
                </div>

                <div className="summary__wrapper">
                    <p className="summary__total">Всего: {getTotalSum(basket).toLocaleString()} ₽</p>
                    <a href="#" className="summary__submit">Оформить заказ</a>
                </div>
            </section>
        </main>
    );
};

export {MainBasket};
