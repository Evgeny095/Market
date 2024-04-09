import React from 'react';
import cl from './NavigateLink.module.css';
import { useNavigate } from 'react-router-dom';


const NavigateLink = () => {
    const navigate=useNavigate();
    const goHome=()=>navigate('/',{ replace: true });
    const goBack=()=>navigate(-1);
    return (
        <div className={cl.wrapper}>
            <button onClick={goHome} className={cl.link}>На главную</button>
            <span className={cl.span}>/</span>
            <button onClick={goBack}  className={cl.link}>Назад</button>
        </div>
    );
};

export default NavigateLink;