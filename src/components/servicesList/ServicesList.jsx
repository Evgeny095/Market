import cl from './ServicesList.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { initServices } from '../../data/initServices';



function ServicesList({ className }) {
    const services = initServices.map(el => {
        return <ServicesItem key={el.header} {...el}>{el.children}</ServicesItem>
    })

    if (className === undefined) className = "";
    return <div className={cl.list + ` ${className}`}>
        {services}
    </div>
}

function ServicesItem({ children, icon, icon_white, header, link }) {
    const [hover, setHover] = useState();
    return <Link to={link} className={cl.item}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <div className={cl.item__content}>
            {!hover && <img className={cl.icon} src={icon} alt="icon service" />}
            {hover && <img className={cl.icon} src={icon_white} alt="icon service" />}
            <h5>{header}</h5>
            <p>{children}</p>
        </div>
    </Link>
}


export { ServicesList, ServicesItem }