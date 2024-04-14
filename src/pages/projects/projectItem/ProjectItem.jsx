import cl from './ProjectItem.module.css'
import Fancybox from '../../../components/fancybox/FancyBox';
import MainButton from '../../../components/mainButton/MainButton'
import { useRef, useState } from 'react';




function ProjectItem({ img, header, description, picturesForGallery }) {

    const linkRef = useRef(null);


    const handleClick = () => {
        if (linkRef.current) {
            linkRef.current.click();
        }
    };


    function fillImgs(arr) {
        return arr.map((el, index) => {
            if (index == 0) {
                return <a key={index} ref={linkRef} data-fancybox="gallery" href={el}></a>
            }
            else {
                return <a key={index} data-fancybox="gallery" href={el}></a>
            }
        })
    }

    return (<>
        <div className={cl.container} onClick={handleClick}>
            <img src={img} alt={header} />
            <div className={cl.content_container}>
                <p className={cl.header}>{header}</p>
                <p>{description}</p>
                <MainButton white={true} >Смотреть галерею</MainButton>
            </div>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: true,
                    },
                }}
            >
                {fillImgs(picturesForGallery)}
            </Fancybox>
        </div>
    </>);
}

export { ProjectItem }