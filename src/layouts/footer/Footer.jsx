import cl from './Footer.module.css'
import { Link } from 'react-router-dom';
import telegram from '../../img/icons/telegram.svg';
import whatsap from '../../img/icons/whatsap.svg';
import LinkButton from '../../components/mainButton/LinkButton';
import masterCard from '../../img/icons/masterCard.png';
import visa from '../../img/icons/Visa.png';
import LinkIcons from '../../components/linkIcons/LinkIcons';
import location from '../../img/icons/location.svg';
import MainButton from '../../components/mainButton/MainButton';
import BtnBigOrdrer from '../../components/btnBigOrdrer/BtnBigOrdrer';


function Footer({ className, ...props }) {

    const classes = `${className} ${cl.wrapper}`
    return <footer className={classes}>
        <div className={cl.content}>
            <ul className={cl.list}>
                <li><h4>Организация</h4></li>
                <li><Link to="about">О компании</Link></li>
                <li><Link to="services">Услуги</Link></li>
                <li><Link to="articles">Статьи</Link></li>
                <li><Link to="vacancies">Вакансии</Link></li>
            </ul>
            <ul className={cl.list}>
                <li><h4>Как купить</h4></li>
                <li><Link to="delivery">Доставка</Link></li>
                <li><Link to="payment">Оплата</Link></li>
                <li><Link to="projects">Проекты</Link></li>
                <li><Link to="contact">Контакты</Link></li>
            </ul>
            <ul className={cl.list}>
                <li><h4>Мы на связи</h4></li>
                <li><h5>8 (843) 203-93-43</h5></li>
                <li><a href='info@td-germes.ru' className={cl.p__email}>info@td-germes.ru</a></li>
                <li>
                    <div className={cl.icon_container}>
                        <Link><img src={telegram} alt="telegram" /></Link>
                        <Link><img src={whatsap} alt="whatsap" /></Link>
                    </div>
                </li>
            </ul>
            <ul className={cl.list}>
                <li><h4>Наш адрес</h4></li>
                <li><h5>Москва</h5></li>
                <li><Link to="payment">ул.Главная 1, 2 этаж</Link></li>
                <li><p>Пн - Пт c 8:30 до 17:30
                    <br />Суббота с 9:00 до 14:00</p></li>
            </ul>
            <div className={cl.button_container}>
                <BtnBigOrdrer />
            </div>
            <ul className={cl.list + " " + cl.list_size}>
                <li className={cl.list_row}>
                    <h5>8 (001) 001-01-01</h5>
                    <h5>mail@mail.ru</h5>
                </li>
                <li className={cl.list_column}>
                    <LinkIcons src={location} />
                    <h5>Москва</h5>
                    <a href="#!">ул.Главная 1, 2 этаж</a>
                </li>
                <li className={cl.list_row}>
                    <LinkIcons src={whatsap} />
                    <p className={cl.p_context}>- задайте вопрос</p>
                </li>
                <li><BtnBigOrdrer /></li>
            </ul>
        </div>
        <div className={cl.bottom_container}>
            <div className={cl.bottom_container__text}>
                <p>© 2012 — 2024, ООО «ТК «Маркет»</p>
                <p>Сайт www.Market.ru носит исключительно информационный характер и ни при каких условиях не является публичной офертой. </p>
                <p>Для получения информации о стоимости товаров, пожалуйста, обращайтесь в отдел продаж компании Маркет.</p>
            </div>
            <div className={cl.botom_images}>
                <img src={masterCard} alt="masterCard" />
                <img src={visa} alt="visa" />
            </div>
        </div>
    </footer >
}

export default Footer;