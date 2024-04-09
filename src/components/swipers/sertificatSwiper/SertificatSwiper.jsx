import cl from './SertificatSwiper.module.css';

import React, {  useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Важные изночальные стили
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Sertificat } from './sertificat/Sertificat';

function SertificatSwiper({count}){
    function imgViewer(){
        const arr=[];
        for (let i = 0; i < count; i++) {
            arr.push(<SwiperSlide  className={cl.swiperSlide} key={i}  ><Sertificat/></SwiperSlide>);
            
        }
        return arr
    }

       //Кастомные стрелки с помощью ref инициальизцация
       const swiperNavPrevRef = useRef(null);
       const swiperNavNextRef = useRef(null);
       const breakpoints = {
   
           320: {
             slidesPerView: 1,
           },
           600: {
               slidesPerView: 2,
           },
           850: {
               slidesPerView: 3,
           },
           1050: {
             slidesPerView: 4,
           },
         };
   
       return (
           <div className={cl.wrapper} >
               <Swiper
                   breakpoints={breakpoints}
                  // slidesPerView={7}
                   spaceBetween={55}
                   autoplay={{
                       delay: 5000,
                       disableOnInteraction: false,
                   }}
                   speed={700}
                   loop={true}
                   // navigation={true}
                   navigation={
                       {
                        prevEl:swiperNavPrevRef.current,
                        nextEl:swiperNavNextRef.current
                        }
                   }
                   modules={[Autoplay, Navigation]}
                   className={cl.swiper}
                   onInit={(swiper)=>{
                       swiper.params.navigation.prevEl=swiperNavPrevRef.current;
                       swiper.params.navigation.nextEl=swiperNavNextRef.current;
                       swiper.navigation.init();
                       swiper.navigation.update();
                   }}
               >
                   {
                     imgViewer()
                   }
                   <div className={cl.swiperNavPrev} ref={swiperNavPrevRef}></div>
                   <div className={cl.swiperNavNext} ref={swiperNavNextRef}></div>
               </Swiper>
           </div >
       );
}

export {SertificatSwiper}