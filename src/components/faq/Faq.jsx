import cl from './Faq.module.css';
import { useState } from 'react';
import icon_open from '../../img/icons/faq_open.svg';
import icon_close from '../../img/icons/faq_close.svg';

function Faq({header,children, ...props}){
    const[OpenState,setOpenState]=useState(false);

    return <div className={cl.faq} onClick={()=>setOpenState(!OpenState)}>
        <div className={cl.header_container}>
            <p className={cl.header}>{header}</p>
            {!OpenState && <img onClick={()=>setOpenState(true)} src={icon_open} alt="open" className={cl.icon}/>}
            {OpenState && <img onClick={()=>setOpenState(false)} src={icon_close} alt="close" className={cl.icon}/>}
        </div>
        {OpenState && <p className={cl.text}>{children}</p>}
    </div>
}

export default Faq;