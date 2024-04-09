
import cl from './MainSwiper.module.css'
import zoom from '../../../img/icons/zoom.svg';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Важные изночальные стили
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';




// import required modules
import { Autoplay, Pagination, Navigation, Zoom, } from 'swiper/modules';


function MainSwiper({ elements, className }) {
    //Кастомные стрелки с помощью ref инициальизцация
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
    function imgViewer(arr) {
        if (!Array.isArray(arr))
            arr = [arr, arr];
        return arr.map((elem, index) => (
            <SwiperSlide className={cl.swiperSlide} key={index} >{elem}</SwiperSlide>
        ))
    }



    return (
        <div className={cl.swipe_container}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                speed={700}
                loop={true}
                zoom={true}
                navigation={false}
                // navigation={
                //     {
                //      prevEl:swiperNavPrevRef.current,
                //      nextEl:swiperNavNextRef.current
                //      }
                // }
                pagination={true}
                modules={[Autoplay, Navigation, Pagination, Zoom]}
                className={cl.swiper + ` ${className}`}
            // onInit={(swiper)=>{
            //     swiper.params.navigation.prevEl=swiperNavPrevRef.current;
            //     swiper.params.navigation.nextEl=swiperNavNextRef.current;
            //     swiper.navigation.init();
            //     swiper.navigation.update();
            // }}
            >
                {imgViewer(elements)}
                {/* <div className={cl.swiperNavPrev} ref={swiperNavPrevRef}></div>
                <div className={cl.swiperNavNext} ref={swiperNavNextRef}></div> */}
            </Swiper>

        </div>
    );
}

export { MainSwiper }