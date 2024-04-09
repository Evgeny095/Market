import cl from './Product.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MainButton from '../../components/mainButton/MainButton'
import { useSelector, useDispatch } from 'react-redux';
import { addInCart } from '../../store/cartSlice'
import { addfavorite, removefavorite } from '../../store/favoriteSlice'
import LinkButton from '../../components/mainButton/LinkButton';
import { fetchProductById } from '../../store/productSlice';
import { SimilarProducts } from '../products/similarProducts/SimilarProducts';
import { ProductImgSwiper } from '../../components/swipers/productImgSwiper/ProductImgSwiper';
import IconButton from '../../components/iconButton/IconButton';
import zoom from '../../img/icons/zoom.svg';
import Fancybox from '../../components/fancybox/FancyBox';
import useWindowSize from '../../hooks/useWindowSize';
import { Message } from '../../components/message/Message';
import useFocus from '../../hooks/useFocus';


function Product() {
    const refPage=useFocus();
    const windowSize = useWindowSize();
    const linkRef = useRef(null);
    const { id } = useParams();
    const dispatch = useDispatch();

    // Управление message
    const [message, setMessage] = useState({
        cartYes: false,
        favoriteYes: false,

    })

    //Достаем данные--
    const { product, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);


    //Узнаем в корзине ли
    const elements_onCart = useSelector(state => state.cart.onCart)
    function checkElementOnCart() {
        if (elements_onCart.find(el => el == id)) return true;
        else return false;
    }
    //Избранное
    const elements_onFavorite = useSelector(state => state.favorite.onFavorite)
    function checkElementOnFavorite() {
        if (elements_onFavorite.find(el => el == id)) return true;
        else return false;
    }
    //
    const [count, setCount] = useState(1);
    const [onCart, setOnCart] = useState(checkElementOnCart());
    const [onFavorite, setOnFavorite] = useState(checkElementOnFavorite());
    const minusCount = () => count >= 2 ? setCount(count - 1) : setCount(count);


    function getSum() {
        return product.price * count;
    }



    function cartHandler() {
        setOnCart(!onCart)
        if (onCart) {
            dispatch(removeInCart(id))
        }
        else {
            dispatch(addInCart({ count, ...product }));
            setMessage({ ...message, cartYes: true })
        }
    }

    function favoriteHandler() {
        setOnFavorite(!onFavorite)
        if (onFavorite) {
            dispatch(removefavorite(id))
        }
        else {
            dispatch(addfavorite({ ...product }))
            setMessage({ ...message, favoriteYes: true })
        }
    }
    function zoomhandlerClick() {
        if (linkRef.current) {
            linkRef.current.click();
        }
    }


    return <section className={cl.wrapper}>
        {(product !== null && product !== undefined) && <>
            <Message statehandler={message.cartYes} bottomPosition={'5%'}>Товар добавлен в корзину</Message>
            <Message statehandler={message.favoriteYes} bottomPosition={'12%'}>Товар добавлен в Избранное</Message>
            <h2 ref={refPage} className='h2_header'>{product.header}</h2>
            <div className={cl.func_container}>
                {/* <div className={cl.img_container}>
                <img src={product.img} alt={product.header} />
            </div> */}
                <div className={cl.img_container}>
                    <ProductImgSwiper imgs={product.img} />
                    <IconButton onClick={zoomhandlerClick} src={zoom} alt="Приблизить" className={cl.zoom} />
                </div>
                <div className={cl.desc_container}>
                    <p className='p_opacyti_context'>Производитель: <span className='p_standart'>{product.development}</span></p>
                    <p className='p_opacyti_context'>Товар:
                        {product.instock && <span className='p_standart'> в наличие</span>}
                        {!product.instock && <span className='p_standart text_red'> нет в наличие</span>}
                    </p>
                    <p className='p_opacyti_context'>Доставка: <span className='p_standart'>бесплатная</span></p>
                    <h3 className='h3_header'>{product.price} ₽/ шт</h3>
                    <div>
                        <p className='p_opacyti_context'>Количество: </p>
                        <div className={cl.count_container}>
                            <button onClick={minusCount} className={cl.btn_count}>-</button>
                            <p className={cl.count}>{count}</p>
                            <button onClick={() => setCount(count + 1)} className={cl.btn_count}>+</button>
                        </div>
                    </div>
                    <div className={cl.sum}>
                        <p className='p_opacyti_context'><span className='h3_header'>{getSum()} ₽ </span>Итоговая цена</p>
                    </div>
                    {!onFavorite && <MainButton onClick={favoriteHandler}>В избранное</MainButton>}
                    {onFavorite && <LinkButton to='/favorite' opacity={true}>Смотерть в избранном</LinkButton>}
                    {/*  */}
                    {!onCart && <MainButton onClick={cartHandler}>В корзину</MainButton>}
                    {onCart && <LinkButton to='/cart' opacity={true}>Товар в корзине</LinkButton>}
                </div>
            </div>
            <div className={cl.info}>
                <h5 className='h3_header'>Описание</h5>
                <span className={cl.line}></span>
                <p className='p_standart'>{product.description}</p>
            </div>
            <div className={cl.info}>
                <h5 className='h3_header'>ОПЛАТА</h5>
                <span className={cl.line}></span>
                <p className='p_standart'>Мы принимаем наличные, банковские карты и безналичные расчеты.</p>
            </div>
            <div className={cl.info}>
                <h5 className='h3_header'>ДОСТАВКА</h5>
                <span className={cl.line}></span>
                <p className='p_standart'>Доставка или самовывоз со склада в г.Москва
                    Срок доставки: от 2 часов с момента подтверждения заказа</p>
            </div>
            <div className={cl.similar}>
                <h2 className='h2_header'>Похожие товары</h2>
                {windowSize.width > 1280 && <SimilarProducts category={product.category} className={cl.similar} count={5} />}
                {windowSize.width <= 1280 && <SimilarProducts category={product.category} className={cl.similar} count={4} />}
            </div>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: true,
                    },
                }}
            >
                <a ref={linkRef} data-fancybox="gallery" href={product.img}></a>
            </Fancybox>
        </>}
    </section>
}

export { Product }