import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import cl from './Phone.module.css'
import useWindowSize from '../../hooks/useWindowSize';
import icon from '../../img/icons/phone.svg';
import CallbackForm from '../forms/callbackForm/CallbackForm';
import ModalWindow from '../modalWindows/ModalWindow';


function Phone({ children }) {
    const size = useWindowSize();
    const [formCallback, setformCallback] = useState(false);
    return (<>
        {
            size.width >= 1150 &&
            <div className={cl.container}>
                {/* <p className={cl.phone}>{children}</p> */}
                <a href={`tel:${children}`} className={cl.phone}> {children}</a>
                {/* <button className={cl.calback}>заказать обратный звонокв</button> */}
                <ModalWindow visible={formCallback} setVisible={setformCallback} noButton={true}>
                    <CallbackForm closeFunc={() => setformCallback(false)} />
                </ModalWindow>
                <button className={cl.calback} onClick={() => setformCallback(true)}>заказать обратный звонок</button>
            </div >
        }
        {
            !(size.width >= 1150) &&
            <div>
            <ModalWindow visible={formCallback} setVisible={setformCallback} noButton={true}>
            <CallbackForm closeFunc={() => setformCallback(false)} />
            </ModalWindow>
            <div className={cl.container_img}>
                <img onClick={() => setformCallback(true)} src={icon} alt="callback" />
            </div>
            </div>
        }
    </>);
}

export default Phone;
// <Phone>8 (843) 203-93-43</Phone>