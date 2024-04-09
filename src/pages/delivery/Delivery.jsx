import cl from './Delivery.module.css'
import Faq from '../../components/faq/Faq'
import useFocus from '../../hooks/useFocus'

function Delivery() {
    const pageFocus=useFocus();
    return <section ref={pageFocus} className={cl.wrapper}>
        <h2 className='h2_header'>Доставка автотранспортом</h2>
        <p className='p_standart'>Стоимость доставки зависит от веса заказа, поэтому точную стоимость доставки просьба уточнять у менеджера магазина по тел. +7(800) 001-01-01.</p>
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
        <h2 className='h2_header'>Доставка по Москве</h2>
        <p>Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории
            Российской Федерации. Мы совершаем прямые поставки продукции с заводов-производителей
            России и Европы, а также доставку товара с собственных складов на территории Казани.</p>
        <h2 className='h2_header'>Самовывоз</h2>
        <p>Компания Маркет осуществляет доставку материалов 7 дней в неделю по всей территории Российской Федерации. </p>
        <div className="iframe__conteiner">
            <a href="https://yandex.ru/maps/org/gum/1331623198/?utm_medium=mapframe&utm_source=maps" className="iframe__a1">ГУМ</a>
            <a href="https://yandex.ru/maps/213/moscow/category/shopping_mall/184108083/?utm_medium=mapframe&utm_source=maps" className="iframe__a2">Торговый центр в Москве</a>
            <iframe src="https://yandex.ru/map-widget/v1/org/gum/1331623198/?ll=37.621408%2C55.754740&z=16" width="560" height="400" allowFullScreen={true} className={"iframe " + cl.iframe}></iframe>
        </div>
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

export { Delivery }