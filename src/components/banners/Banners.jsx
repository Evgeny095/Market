
import cl from './Banners.module.css';
import { init_banners } from '../../data/initBanners';
import { useState } from 'react';
import arrow from '../../img/icons/location_arrow.svg'
import { Banner } from './Banner';

function Banners() {
    const banners = init_banners.map(el => <Banner key={el.Id} {...el} />)
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


export { Banners }