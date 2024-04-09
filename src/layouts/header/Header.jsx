import cl from './Header.module.css'
import { NavLink, Link, useNavigate } from 'react-router-dom';

import Logo from '../../components/logo/Logo';
import LinkIcons from '../../components/linkIcons/LinkIcons';

import star from '../../img/icons/star.svg'
import cart from '../../img/icons/cart.svg'
import Phone from '../../components/phone/Phone';
import useWindowSize from '../../hooks/useWindowSize';
import burger from '../../img/icons/burger_header.svg';
import close_white from '../../img/icons/close_burger.png'
import { useState, useRef } from 'react';
import { CartIcon } from '../../pages/cart/cartIcon/CartIcon';
import { FavoriteIcon } from '../../pages/favorite/favoriteIcon/FavoriteIcon';

function Header() {
    const windowSize = useWindowSize();
    const [openBurger, setOpenBurger] = useState(false);
    const setActive = ({ isActive }) => isActive ? `${cl.info__link_active} ${cl.info__link}` : cl.info__link;

    let navigate = useNavigate();

    const handleChange = (event) => {
        event.preventDefault();
        navigate(`${event.target.value}`);
        event.target.value = "1";
    };


    return (<>
        {
            windowSize.width > 840 &&
            <header className={cl.header}>
                <Logo />
                <nav className={cl.info}>
                    <NavLink to='/' onClick={() => setOpenBurger(false)} className={setActive}>Главная</NavLink>
                    <NavLink to='services' className={setActive}>Услуги</NavLink>
                    <NavLink to='delivery' className={setActive}>Доставка</NavLink>
                    {/* <NavLink to='payment' className={setActive}>Оплата</NavLink> */}
                    {/* <NavLink to='projects' className={setActive}>Проекты</NavLink> */}
                    <div className={cl.select_container}>
                        <select name="headerSelect" id="headerSelect" className={cl.select} onChange={handleChange} defaultValue='1'>
                            <option className={cl.option} value="1" style={{ display: 'none' }} disabled >Еще</option>
                            <option className={cl.option} value="payment">Оплата</option>
                            <option className={cl.option} value="projects">Проекты</option>
                            <option className={cl.option} value="articles">Cтатьи</option>
                            <option className={cl.option} value="vacancies">Вакансии</option>
                        </select>
                    </div>
                </nav>
                <div className={cl.header_right}>
                    <FavoriteIcon />
                    {/* <LinkIcons to='favorite' src={star} alt='favorite' /> */}
                    <CartIcon />
                    {/* <LinkIcons to='cart' src={cart} alt='cart' /> */}
                    <Phone>8 (001) 001-00-01</Phone>
                </div>
            </header>
        }
        {
            windowSize.width <= 840 &&
            <>
                {openBurger &&
                    <nav className={cl.nav_burger}>
                        <NavLink to='/' onClick={() => setOpenBurger(false)} className={setActive}>Главная</NavLink>
                        <NavLink to='about' onClick={() => setOpenBurger(false)} className={setActive}>О компании</NavLink>
                        <NavLink to='stock' onClick={() => setOpenBurger(false)} className={setActive}>Акции</NavLink>
                        <NavLink to='contact' onClick={() => setOpenBurger(false)} className={setActive}>Контакты</NavLink>
                        <NavLink to='services' onClick={() => setOpenBurger(false)} className={setActive}>Услуги</NavLink>
                        <NavLink to='delivery' onClick={() => setOpenBurger(false)} className={setActive}>Доставка</NavLink>
                        <NavLink to='payment' onClick={() => setOpenBurger(false)} className={setActive}>Оплата</NavLink>
                        <NavLink to='projects' onClick={() => setOpenBurger(false)} className={setActive}>Проекты</NavLink>
                        <NavLink to='articles' onClick={() => setOpenBurger(false)} className={setActive}>Статьи</NavLink>
                        <NavLink to='vacancies' onClick={() => setOpenBurger(false)} className={setActive}>Вакансии</NavLink>
                        <button onClick={() => setOpenBurger(false)} className={cl.close_burger}>
                            <img className={cl.close_burger__img} src={close_white} alt="close burger" />
                        </button>
                    </nav>
                }
                <header className={cl.header}>
                    <Logo />
                    <div className={cl.header_right}>
                        <FavoriteIcon />
                        {/* <LinkIcons to='about' src={star} alt='favorite' /> */}
                        <CartIcon />
                        {/* <LinkIcons to='about' src={cart} alt='cart' /> */}
                        <Phone>8 (0001) 001-11-01</Phone>
                        <button onClick={() => setOpenBurger(true)} className={cl.button_burger}>
                            <img className={cl.button_burger__img} src={burger} alt="burger menu" />
                        </button>
                    </div>
                </header>
            </>
        }
    </>);
}

export default Header;

