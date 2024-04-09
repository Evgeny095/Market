import cl from './Sertificat.module.css';
import img from '../../../../img/sertificat.jpg'
import loupe from '../../../../img/icons/loupe.svg';
import Fancybox from '../../../fancybox/FancyBox';
import { useRef } from 'react';

function Sertificat(){
    const linkRef = useRef(null);
    
    const handleClick = () => {
        if (linkRef.current) {
            linkRef.current.click();
        }
    };

    return <div className={cl.container} onClick={handleClick}>
        <img className={cl.img} src={img} alt="sertificat" />
        <div className={cl.fon}>
            <img src={loupe} alt="Увеличить" className={cl.img_icon} />
        </div>
        <Fancybox
                options={{
                    Carousel: {
                        infinite: true,
                    },
                }}
            >
                <a ref={linkRef} data-fancybox="gallery" href={img}></a>
            </Fancybox>
    </div>
}

export {Sertificat}