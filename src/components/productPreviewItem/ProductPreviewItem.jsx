import cl from './productPreviewItem.module.css';
import _img from '../../img/test_productPrewiew.png';
import { Link } from 'react-router-dom';
import LinkButton from '../mainButton/LinkButton';

import goCart from '../../img/icons/previewProduct/cart.svg'
import check from '../../img/icons/previewProduct/check.svg'

import today from '../../img/icons/previewProduct/today.png'
import lider from '../../img/icons/previewProduct/lider.png'
import sale from '../../img/icons/previewProduct/sale.png'

import favorite_false from '../../img/icons/previewProduct/favorite_false.svg'
import favorite_true from '../../img/icons/previewProduct/favorite_true.svg'

import { memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addInCart, togleCount, removeInCart } from '../../store/cartSlice'
import { addfavorite, removefavorite } from '../../store/favoriteSlice'


const ProductPreviewItem = memo(({ id, img, header, description, price, advantages, category, development, instock, faoviteRemove }) => {

    const inStock = Boolean(instock);

    let headerSplit = header.split(' ').slice(0, 4).join(' ');
    if (headerSplit.length < header.length)
        headerSplit = headerSplit + '...';
    const elements_onCart = useSelector(state => state.cart.onCart)
    function checkElementOnCart() {
        if (elements_onCart.find(el => el == id)) return true;
        else return false;
    }

    const elements_onFavorite = useSelector(state => state.favorite.onFavorite)
    function checkElementOnFavorite() {
        if (elements_onFavorite.find(el => el == id)) return true;
        else return false;
    }


    const [onCart, setOnCart] = useState(checkElementOnCart());
    const [favorite, setFavorite] = useState(checkElementOnFavorite());
    // --test

    const dispatch = useDispatch();

    const path = `/product/${id}`;

    function cartHandler() {
        setOnCart(!onCart)
        if (onCart) {
            dispatch(removeInCart(id))
        }
        else {
            dispatch(addInCart({ id, img, header, description, price, advantages, category, development, inStock, count: 1 }));
        }
    }

    const [removeCl, setRemoveCl] = useState('');
    async function favoriteHandler() {
        setFavorite(!favorite);
        if (favorite) {
            if (faoviteRemove) {
                setRemoveCl(cl.remove);
                await new Promise(resolve => setTimeout(resolve, 300));
            }
            dispatch(removefavorite(id))
        }
        else {
            dispatch(addfavorite({ id, img, header, description, price, advantages, category, development, inStock }))

        }
    }

    function adv_img() {
        switch (advantages) {
            case 'lider':
                return <img src={lider} className={cl.adv_img} alt='lider' />
            case 'today':
                return <img src={today} className={cl.adv_img} alt='today' />
            case 'sale':
                return <img src={sale} className={cl.adv_img} alt='sale' />
            default:
                return <span></span>
        }
    }

    return <div key={id} className={cl.container + ` ${removeCl}`}>
        <div className={cl.top_element}>
            {adv_img()}
            {!favorite && <img className={cl.favorite} onClick={favoriteHandler} src={favorite_false} alt='favorite' />}
            {favorite && <img className={cl.favorite} onClick={favoriteHandler} src={favorite_true} alt='favorite' />}
        </div>
        <div className={cl.content}>
            <img className={cl.prewImg} src={img} alt={headerSplit} />
            <Link to={path} className={cl.header}>{headerSplit}</Link>
            <p className={cl.development}>Производитель: <span>{development}</span></p>
            <div className={cl.market_state}>
                <p>бесплатная доставка</p>
                {inStock && <p className={cl.instock}>в наличии</p>}
                {!inStock && <p className={cl.instock + ' text_red'}>нет в наличие</p>}
            </div>
            <p className={cl.price}><span>{price}</span> ₽/ шт</p>
            <div className={cl.buttons}>
                {!favorite && <img className={cl.favorite_adaptive} onClick={favoriteHandler} src={favorite_false} alt='favorite' />}
                {favorite && <img className={cl.favorite_adaptive} onClick={favoriteHandler} src={favorite_true} alt='favorite' />}
                <LinkButton to={path} className={cl.seeMore}>Подробнее</LinkButton>
                {!onCart && <button onClick={cartHandler} className={cl.cart}>{<img src={goCart} />}</button>}
                {onCart && <button onClick={cartHandler} className={cl.cart}>{<img src={check} />}</button>}
            </div>
        </div>
    </div>
});
ProductPreviewItem.displayName = 'ProductPreviewItem'; // Устанавливаем displayName для компонента
export { ProductPreviewItem }