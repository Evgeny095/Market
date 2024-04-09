import cl from './NavigationBlock.module.css';
import { Link } from 'react-router-dom';
import LinkButton from '../../components/mainButton/LinkButton'
import Search from '../../components/search/Search';
import Catalog from './catalog/Catalog';
import { Banners } from '../../components/banners/Banners';
import delivery from '../../img/adventeg_title/Delivery.png';
import price from '../../img/adventeg_title/Price.png';
import sales from '../../img/adventeg_title/Sales.png';
import works from '../../img/adventeg_title/Works.png';
import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import MainButton from '../../components/mainButton/MainButton';
import icon_search_white from '../../img/icons/search_white.svg'
import { BannerSwiper } from '../../components/swipers/bannerSwiper/BannerSwiper';
import BtnBigOrder from '../../components/btnBigOrdrer/BtnBigOrdrer'


function NavigationBlock() {
    const [viewBlock, setViewBlock] = useState(true);
    const [openState, setOpenState] = useState(true);
    const [searchSizeState, setSearchSizeState] = useState();
    const windowSize = useWindowSize();


    //  const searchSizeClass=openState? `${cl.search_container_size} ${cl.search_container_size_init}` : cl.search_container_size;
    const bannerClass = openState ? cl.banner : `${cl.banner} ${cl.banner_init}`;
    const advantagesClass = openState ? cl.advantages : `${cl.advantages} ${cl.advantages_init}`;
    const wrapperClass = openState ? cl.wrapper : `${cl.wrapper} ${cl.wrapper_init}`;

    const buttonSearchHandler = () => {
        setSearchSizeState(!searchSizeState);
        setOpenState(false)
    }
    const openStateHandler = () => {
        setOpenState(!openState);
        setSearchSizeState(false);
    }


    return (<>
        {
            windowSize.width > 1150 &&
            <section className={wrapperClass}>
                <Catalog stateHandler={openStateHandler} state={openState} otherCl={cl.Catalog} />
                <ul className={cl.list}>
                    <li> <Link className='text_red' to='stock'>Акции</Link> </li>
                    <li><Search /></li>
                    <li><Link to='about'>О компании</Link></li>
                    <li><Link to='contact'>Контакты</Link></li>
                    <li><BtnBigOrder /></li>
                </ul>
                <div className={bannerClass}>
                    {openState && <BannerSwiper />}
                </div>
                <div className={advantagesClass}>
                    <img src={delivery} alt="delivery" />
                    <img src={price} alt="price" />
                    <img src={sales} alt="sales" />
                    <img src={works} alt="works" />
                </div>
            </section>
        }
        {
            (windowSize.width <= 1150 && windowSize.width > 840) &&
            <section className={cl.wrapper_size}>
                <ul className={cl.list_size}>
                    <li><Catalog stateHandler={openStateHandler} state={openState} otherCl={cl.Catalog} /></li>
                    <li><LinkButton to='stock'>Акции</LinkButton></li>
                    <li><LinkButton to='about'>О компании</LinkButton></li>
                    <li><LinkButton to='contact'>Контакты</LinkButton></li>
                    <li><MainButton onClick={buttonSearchHandler} >
                        <div className={cl.icon__container_size}>
                            <img src={icon_search_white} alt="search_icon" />
                        </div>
                    </MainButton></li>
                </ul>
                {(!openState && searchSizeState) &&
                    <div className={cl.search_container_size}>
                        <Search />
                    </div>
                }
                <button onClick={() => setViewBlock(!viewBlock)} className={viewBlock ? `${cl.viewBLock_btn}` : `${cl.viewBLock_btn} ${cl.viewBLock_btn_border}`}>{viewBlock ? 'Скрыть предложения ▼' : 'Показать предложения ▲'}</button>
                {viewBlock && <>
                    <BannerSwiper />
                    <div className={cl.advantages}>
                        <img src={delivery} alt="delivery" />
                        <img src={price} alt="price" />
                        <img src={sales} alt="sales" />
                        <img src={works} alt="works" />
                    </div>
                </>}
            </section>
        }
        {
            windowSize.width <= 840 &&
            <section className={cl.wrapper_size}>
                <ul className={cl.list_size}>
                    <li><Catalog stateHandler={openStateHandler} state={openState} otherCl={cl.Catalog} /></li>
                    <li><MainButton onClick={buttonSearchHandler} >
                        <div className={cl.icon__container_size}>
                            <img src={icon_search_white} alt="search_icon" />
                        </div>
                    </MainButton></li>
                </ul>
                {(!openState && searchSizeState) &&
                    <div className={cl.search_container_size}>
                        <Search />
                    </div>
                }
                <button onClick={() => setViewBlock(!viewBlock)} className={viewBlock ? `${cl.viewBLock_btn}` : `${cl.viewBLock_btn} ${cl.viewBLock_btn_border}`}>{viewBlock ? 'Скрыть предложения ▼' : 'Показать предложения ▲'}</button>
                {viewBlock && <>
                    <BannerSwiper />
                    <div className={cl.advantages_size}>
                        <img src={delivery} alt="delivery" />
                        <img src={price} alt="price" />
                        <img src={sales} alt="sales" />
                        <img src={works} alt="works" />
                    </div>
                </>}
            </section>
        }
    </>);
}

export default NavigationBlock;