import { useState } from 'react'
import cl from './Message.module.css'

function Message({ children, red, className, classNameMessage, statehandler, bottomPosition }) {
    if (statehandler == undefined || statehandler !== true) return;
    if (bottomPosition == undefined) bottomPosition = '5%'
    const [view, setWiew] = useState(statehandler);
    let classes = cl.green;
    if (red !== undefined && red == true) {
        classes = cl.red;
    }

    if (view) end();
    function end() {
        setTimeout(() => {
            setWiew(false);
        }, 2000);
    }
    return <>{
        view && <div className={cl.wrapper + ` ${className}`}>
            <p style={{ bottom: bottomPosition }} className={`${cl.message} ${classes} ${classNameMessage}`}>{children}</p>
        </div>
    }</>

}

export { Message }