import cl from './BrandsSwiper.module.css'
import img_1 from '../../../img/swipers/brands/1.png';
import img_2 from '../../../img/swipers/brands/9.png';
import img_3 from '../../../img/swipers/brands/3.png';
import img_4 from '../../../img/swipers/brands/4.jpg';
import img_5 from '../../../img/swipers/brands/5.png';
import img_6 from '../../../img/swipers/brands/6.png';
import img_7 from '../../../img/swipers/brands/7.jpg';
import img_8 from '../../../img/swipers/brands/8.jpg';
import img_9 from '../../../img/swipers/brands/2.png';
import img_10 from '../../../img/swipers/brands/10.png';
import img_11 from '../../../img/swipers/brands/11.png';


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Важные изночальные стили
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const imgArr=[img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8,img_9,img_10,img_11];
function imgViewer(){
    return imgArr.map((img, index) => (
        <SwiperSlide  className={cl.swiperSlide} key={index}  ><img className={cl.img} src={img} /></SwiperSlide>
    ))
}

export default function BrandsSwiper() {
    //Кастомные стрелки с помощью ref инициальизцация
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
    const breakpoints = {

        320: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        600: {
            slidesPerView: 4,
        },
        850: {
            slidesPerView: 5,
        },
        1050: {
          slidesPerView: 7,
        },
      };

    return (
        <article className={cl.wrapper} >
            <Swiper
                breakpoints={breakpoints}
               // slidesPerView={7}
                spaceBetween={40}
                autoplay={{
                    delay: 3000,
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
                    imgArr.map((img, index) => (
                        <SwiperSlide  className={cl.swiperSlide} key={index}  ><img className={cl.img} src={img} /></SwiperSlide>
                    ))
                }
                <div className={cl.swiperNavPrev} ref={swiperNavPrevRef}></div>
                <div className={cl.swiperNavNext} ref={swiperNavNextRef}></div>
            </Swiper>
        </article >
    );
}

export { BrandsSwiper }