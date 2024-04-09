
import cl from './ProductImgSwiper.module.css'
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
import { Autoplay, Pagination, Navigation, Zoom } from 'swiper/modules';


 function ProductImgSwiper({imgs}) {
    //Кастомные стрелки с помощью ref инициальизцация
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
    function imgViewer(arr){
        if(!Array.isArray(arr))
        arr=[arr,arr];
        return arr.map((img, index) => (
            <SwiperSlide  className={cl.swiperSlide} key={index}  ><img className={cl.img} src={img} /></SwiperSlide>
        ))
    }
    
    function zoomhandlerClick(){

    }

    return (
            <div className={cl.swipe_container}>
                <Swiper
                slidesPerView={1}
                spaceBetween={0}
                speed={700}
                loop={true}
                zoom={true}
                 navigation={true}
                // navigation={
                //     {
                //      prevEl:swiperNavPrevRef.current,
                //      nextEl:swiperNavNextRef.current
                //      }
                // }
                // pagination={true}
                modules={[Autoplay, Navigation,Pagination,Zoom]}
                className={cl.swiper}
                // onInit={(swiper)=>{
                //     swiper.params.navigation.prevEl=swiperNavPrevRef.current;
                //     swiper.params.navigation.nextEl=swiperNavNextRef.current;
                //     swiper.navigation.init();
                //     swiper.navigation.update();
                // }}
            >
                {imgViewer(imgs)}
                {/* <div className={cl.swiperNavPrev} ref={swiperNavPrevRef}></div>
                <div className={cl.swiperNavNext} ref={swiperNavNextRef}></div> */}
            </Swiper>
           
            </div>
    );
}

export { ProductImgSwiper }