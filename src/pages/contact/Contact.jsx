import cl from './Contact.module.css';
import { CompanySwiper } from '../../components/swipers/companySwiper/CompanySwiper'
import useFocus from '../../hooks/useFocus';

function Contact() {
    const pageFocus=useFocus();
    return <section ref={pageFocus} className={cl.wrapper}>
        <h2 className='h2_header'>Контакты</h2>
        <div className="iframe__conteiner">
            <a href="https://yandex.ru/maps/org/gum/1331623198/?utm_medium=mapframe&utm_source=maps" className="iframe__a1">ГУМ</a>
            <a href="https://yandex.ru/maps/213/moscow/category/shopping_mall/184108083/?utm_medium=mapframe&utm_source=maps" className="iframe__a2">Торговый центр в Москве</a>
            <iframe src="https://yandex.ru/map-widget/v1/org/gum/1331623198/?ll=37.621408%2C55.754740&z=16" width="560" height="400" frameBorder={1} allowFullScreen={true} className={"iframe " + cl.iframe}>
            </iframe>
        </div>
        <div className={cl.content_container}>
            <div>
                <h2 className='h2_header'>Адреса офисов:</h2>
                <p className='p_standart'>400000, г. Москва, ул.Главная 1</p>
                <p className='justLink'>Имеется бесплатная парковка</p>
                <h2 className='h2_header'>Email</h2>
                <div className={cl.emails}>
                    <a href='mail@mail.ru' className='justLink'>mail@mail.ru</a>
                    <p className='p_standart'>(для заказа строительных материалов)</p>
                </div>
                <div className={cl.emails}>
                    <a href='mail@mail.ru' className='justLink'>mail@mail.ru</a>
                    <p className='p_standart'>(для заказа отделочных материалов)</p>
                </div>
            </div>
            <div>
                <h2 className='h2_header'>Время работы:</h2>
                <p className='p_standart'>Пн-Пт 8:30–17:30</p>
                <p className='p_standart'>Сб: 9:00–12:00</p>
                <h2 className='h2_header'>Телефон:</h2>
                <p className='p_standart'>8 (801) 000-01-01</p>
                <button onClick={() => console.log("Заказать звонок")} className={`justLink ${cl.phoneLink}`}>Заказать звонок</button>
            </div>
            <div className={cl.slider_container}>
                <CompanySwiper />
            </div>
        </div>
    </section>
}

export { Contact };