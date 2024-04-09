import cl from './CartItem.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import favorite_false from '../../../img/icons/previewProduct/favorite_false.svg';
import favorite_true from '../../../img/icons/previewProduct/favorite_true.svg';
import trash from '../../../img/icons/trash.svg';
import IconButton from '../../../components/iconButton/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { removeInCart, togleCount } from '../../../store/cartSlice'
import { addfavorite, removefavorite } from '../../../store/favoriteSlice'

function CartItem({ id, img, header, price, count, description, advantages, category, development, inStock }) {
    //Получить 
    const [_count, setCount] = useState(count);
    const dispatch = useDispatch();
    function countHandler(operant) {
        if (operant === "+") {
            setCount(_count + 1);
            dispatch(togleCount({ id, count: _count + 1 }));
        }
        else if (operant === "-") {
            if (count >= 2) {
                setCount(_count - 1)
                dispatch(togleCount({ id, count: _count - 1 }));
            }
        }
    }

    const elements_onFavorite = useSelector(state => state.favorite.onFavorite)
    function checkElementOnFavorite() {
        if (elements_onFavorite.find(el => el == id)) return true;
        else return false;
    }

    function favoriteHandler() {
        setFavorite(!favorite);
        if (favorite) {
            dispatch(removefavorite(id))
        }
        else {
            dispatch(addfavorite({ id, img, header, description, price, advantages, category, development, inStock }))
        }
    }
    const [favorite, setFavorite] = useState(checkElementOnFavorite());


    function priceHandler() {
        return price * _count;
    }

    const [removeCl, setRemoveCl] = useState('');
    async function removeFromCart() {
        setRemoveCl(cl.remove);
        await new Promise(resolve => setTimeout(resolve, 400));
        dispatch(removeInCart(id));
    }
    return <>
        <div className={cl.contaiener + ` ${removeCl}`}>
            <img className={cl.img} src={img} alt={header} />
            <Link className={cl.header} to={`/product/${id}`}>{header}</Link>
            <div className={cl.count_container}>
                <button onClick={() => countHandler("-")} className={cl.btn_count}>-</button>
                <p className={cl.count}>{_count}</p>
                <button onClick={() => countHandler("+")} className={cl.btn_count}>+</button>
            </div>
            <p className='p_standart'>{priceHandler()} ₽</p>
            <div className={cl.icon_btn_container}>
                {!favorite && <IconButton className={cl.favorite} onClick={favoriteHandler} src={favorite_false} alt='favorite' />}
                {favorite && <IconButton className={cl.favorite} onClick={favoriteHandler} src={favorite_true} alt='favorite' />}
                <IconButton src={trash} onClick={removeFromCart} />
            </div>
        </div>
        <span className={cl.line}></span>
    </>
}

export { CartItem }