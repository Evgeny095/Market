import Faq from '../../components/faq/Faq'
import useFocus from '../../hooks/useFocus'
import cl from './Payment.module.css'

const url = {
    nal: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D0%B0%D1%82%D1%91%D0%B6#:~:text=%D0%9D%D0%B0%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%BB%D0%B0%D1%82%D1%91%D0%B6%20%E2%80%94%20%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8%20%D1%81%20%D0%B4%D0%B5%D0%BD%D0%B5%D0%B6%D0%BD%D0%BE%D0%B9,%D0%BE%D0%B1%D1%8B%D1%87%D0%BD%D0%BE%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B2%D0%BB%D0%B8%D0%B2%D0%B0%D0%B5%D1%82%D1%81%D1%8F%20%D0%B2%20%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B5",
    bank_card: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D0%B0%D1%80%D1%82%D0%B0",
    bez_nal: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%B7%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B5_%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82%D1%8B",
    online: "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BF%D0%BB%D0%B0%D1%82%D1%91%D0%B6"
}

function Payment() {
    const pageFocus=useFocus();
    return <section ref={pageFocus} className={cl.wrapper}>
        <h2 className='h2_header'>Способы оплаты товаров и услуг</h2>
        <div className={cl.linkWrap}>
            <a rel="noreferrer" target='_blank' href={url.nal}>Наличный расчет</a>
            <a rel="noreferrer" target='_blank' href={url.nal}>Банковской картой</a>
            <a rel="noreferrer" target='_blank' href={url.nal}>Безналичный расчет</a>
            <a rel="noreferrer" target='_blank' href={url.nal}>Online оплата</a>
        </div>
        <p className='p_standart'>Стоимость доставки зависит от веса заказа, поэтому точную стоимость доставки просьба уточнять у менеджера магазина по тел. +7(843) 203-93-43.</p>
        <p className='p_standart'>Сроки доставки: <span className={cl.color_green}>в день заказа</span> и до 3-х рабочих дней для отдельных позиций.</p>
        <p className='p_header'>Стоимость доставки в зависимости от веса заказа:</p>
        <ul className={`${cl.list} p_standart`}>
            <li>до 1,5 тонн - 2500 руб.</li>
            <li>до 2 тонн - 3500 руб.</li>
            <li>до 3 тонн - 4000 руб.</li>
            <li>до 5 тонн - 9000 руб.</li>
            <li>до 8 тонн - 11000 руб.</li>
            <li>до 20 тонн - 18000 руб.</li>
        </ul>
        <p className='p_standart'>Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </p>
        <h2 className='h2_header'>Частые вопросы</h2>
        <div className="faqContainer">
            <div><Faq header="Как я могу оплатить товары?">Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
            <div><Faq header="Как получить бесплатную доставку?">Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
            <div><Faq header="Как получить бесплатную доставку?">Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
            <div><Faq header="Как получить бесплатную доставку?">Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
            <div><Faq header="Как получить бесплатную доставку?">Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
            <div><Faq header="Как получить бесплатную доставку?">Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </Faq></div>
        </div>
    </section>
}

export { Payment }
//Оплата
