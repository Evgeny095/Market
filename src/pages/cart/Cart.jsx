//import { ProductPreviewItem } from '../../components/productPreviewItem/ProductPreviewItem';
import cl from './Cart.module.css';
import { useSelector } from 'react-redux';
import delivery from '../../img/adventeg_title/Delivery.png';
import price from '../../img/adventeg_title/Price.png';
import sales from '../../img/adventeg_title/Sales.png';
import works from '../../img/adventeg_title/Works.png';
import { CartItem } from './item/CartItem';
import MainButton from '../../components/mainButton/MainButton';
import Faq from '../../components/faq/Faq';
import { useMemo, useState } from 'react';
import ModalWindow from '../../components/modalWindows/ModalWindow';
import useFocus from '../../hooks/useFocus';


function Cart() {
    const focusPage=useFocus();
    const products = useSelector(state => state.cart.cart);
    const productsArr = useMemo(()=>products.map(el => <CartItem key={el.id} {...el} />),[products]);
    const [payMessage, setPayMessage] = useState(false);


    const fullPrices = useSelector(state => state.cart.prices);

    return <section ref={focusPage} className={cl.wrapper} >
        <ModalWindow visible={payMessage} setVisible={setPayMessage}>Оформление заказа сейчас не доступно</ModalWindow>
        <h2 className='h2_header'>Моя корзина</h2>
        {productsArr.length >= 1 &&
            <div className={cl.headers}>
                <p className='p_opacyti_context'>Изображение</p>
                <p className='p_opacyti_context'>Наименование товара</p>
                <p className='p_opacyti_context'>Количество</p>
                <p className='p_opacyti_context'>Итого</p>
                <p className='p_opacyti_context'>Операции</p>
            </div>
        }
        <div className={cl.content}>
            {productsArr.length < 1 && <p className={cl.info}>В корзине пока ничего нет...</p>}
            {productsArr.length >= 1 && productsArr}
        </div>
        {productsArr.length >= 1 &&
            <div className={cl.itog_container}>
                <MainButton style={{ width: "310px" }} onClick={() => setPayMessage(true)}>Перейти к оформлению заказа</MainButton>
                <h3 className='h3_header'>Итоговая цена: <span className={cl.blue_text}>{fullPrices}</span> ₽</h3>
            </div>
        }
        <div className={cl.advent}>
            <img src={delivery} alt="delivery" />
            <img src={price} alt="price" />
            <img src={sales} alt="sales" />
            <img src={works} alt="works" />
        </div>
        <h2 className='h2_header'>Частые вопросы</h2>
        <div className="faqContainer">
            <div><Faq header="Как я могу оплатить товары?">Компания Гермес осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
            <div><Faq header="Как получить бесплатную доставку?">Компания Гермес осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
            <div><Faq header="Как получить бесплатную доставку?">Компания Гермес осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
            <div><Faq header="Как получить бесплатную доставку?">Компания Гермес осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
        </div>
    </section>

}


export { Cart }