import LinkButton from '../mainButton/LinkButton';
import cl from './Banners.module.css';
import { init_banners } from '../../data/initBanners';
import { useState } from 'react';
import arrow from '../../img/icons/location_arrow.svg'

function Banners() {
    const banners = init_banners.map(el => <Banner {...el} />)
    const [count, setCount] = useState(0)
    function clickHandler() {
        console.log(count)
        if (count < banners.length - 1) {
            setCount(count + 1);
        }
        else {
            setCount(0);
        }
    }
    return <div className={cl.list}>
        <img onClick={clickHandler} className={`${cl.arrow} ${cl.left_arrow}`} src={arrow} alt="left_arrow" />
        <img onClick={clickHandler} className={`${cl.arrow} ${cl.right_arrow}`} src={arrow} alt="right_arrow" />
        {banners[count]}
    </div>
}

function Banner({ id, title, text, url, img, alt }) {
    return <div id={`banner_${id}`} className={cl.card}>
        <div className={cl.img_container}>
            <img className={cl.img} src={img} alt={alt} />
        </div>
        <div className={cl.content}>
            <h2 className={cl.title}>{title}</h2>
            <p className={cl.text}>{text}</p>
            <LinkButton white={true} to={url}>Перейти</LinkButton>
        </div>
    </div>
}

export { Banners, Banner }