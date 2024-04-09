import React from 'react';
import cl from './Loyout.module.css'
import { Outlet } from 'react-router-dom'
import Header from './header/Header';
import NavigationBlock from './navigationBlock/NavigationBlock';
import Footer from './footer/Footer';
import NavigateLink from '../components/navigateLink/NavigateLink';
import BrandsSwiper from '../components/swipers/brandsSwiper/BrandsSwiper';

const Loyout = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <Header />
                <NavigationBlock />
                {/* Outlet - Содержит в себе основной контент */}
                <main className={cl.main}>
                    <NavigateLink />
                    <Outlet />
                </main>
                <BrandsSwiper/>
            </div>
            <Footer className={cl.footer} />
        </div>
    );
};

export { Loyout };